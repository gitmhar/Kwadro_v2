import dotenv from "dotenv";
dotenv.config();

import type { Request, Response } from "express";
import Stripe from "stripe";
import { handleCheckoutCompleted } from "../services/reservation.services.js";

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
