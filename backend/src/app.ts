import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import reservation from "./routes/reservation.js";
import stripeHandler from "./routes/stripe.js";

const app = express();

// Middleware

app.use(cors({ origin: process.env.FRONTEND_URL }));

// Routes
app.use(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  stripeHandler,
);

app.use(express.json());
app.use("/api/reservations", stripeHandler);
app.use("/book", reservation);

// Health check route

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

export default app;
