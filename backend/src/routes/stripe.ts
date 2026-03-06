import express from "express";
import * as stripeHandler from "../controllers/stripe.js";

const router = express.Router();

router.post(
  "/",
  stripeHandler.stripeWebhook,
);

export default router;
