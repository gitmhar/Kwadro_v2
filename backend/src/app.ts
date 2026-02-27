import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import reservation from "./routes/reservation.js";

const app = express();

// Middleware

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Routes

app.use("/book", reservation);

// Health check route

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

export default app;
