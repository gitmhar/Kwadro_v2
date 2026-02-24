import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import reservation from "./routes/reservation.js";

dotenv.config();

// Middleware

const app = express();
app.use(express.json());

app.use(cors());

// Routes

app.use("/reservation", reservation);

// Localhost port connection

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running, connected to ${process.env.PORT}`);
  });
});
