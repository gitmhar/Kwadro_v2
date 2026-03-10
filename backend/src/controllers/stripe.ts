import dotenv from "dotenv";
dotenv.config();

import type { Request, Response } from "express";
import Stripe from "stripe";
import { handleCheckoutCompleted } from "../services/webhook.js";
import { Reservation } from "../models/reservation.js";

export const stripeWebhook = async (req: Request, res: Response) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig as string,
      process.env.STRIPE_WEB_HOOK as string,
    );
  } catch (err: any) {
    console.error(`Webhook error: ${err.message}`);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutCompleted(event.data.object);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  //   if (event.type === "checkout.session.completed") {
  //     await handleCheckoutCompleted(event.data.object);
  //   }

  res.json({ received: true });
};

export const cancelReservation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res.redirect(`${process.env.FRONTEND_URL}/book?status=error`);
    }

    if (reservation.status === "paid") {
      return res.redirect(
        `${process.env.FRONTEND_URL}/book?status=already-paid`,
      );
    }

    reservation.status = "cancelled";
    await reservation.save();

    // ✅ Send a redirect after successful cancellation
    return res.redirect(`${process.env.FRONTEND_URL}/book?status=cancelled`);
  } catch (err: any) {
    return res.redirect(`${process.env.FRONTEND_URL}/book?status=error`);
  }
};
