import express from "express";
import { stripeWebhook, cancelReservation } from "../controllers/stripe.js";

const router = express.Router();

router.post(
  "/",
  stripeWebhook,
);

router.get("/cancel/:id", cancelReservation)

export default router;
