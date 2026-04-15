import express from "express";
import { stripeWebhook, cancelReservation, createCheckoutSession } from "../controllers/stripe.js";
import { verifyFirebase } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/",
  stripeWebhook,
);

router.get("/cancel/:id", cancelReservation)
router.post("/checkout/:reservationId", verifyFirebase, createCheckoutSession)

export default router;
