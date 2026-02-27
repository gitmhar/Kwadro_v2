import dotenv from "dotenv";
dotenv.config();

import express, { type Request, type Response } from "express";
import { createServer } from "http";
import cors from "cors";
import { initSocket } from "./config/socket.js";
import { connectDB } from "./config/database.js";
import reservation from "./routes/reservation.js";

const app = express();
const httpServer = createServer(app);

// Middleware

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

initSocket(httpServer);

// Routes

app.use("/book", reservation);

// Localhost port connection

connectDB().then(() => {
  httpServer.listen(process.env.PORT, () => {
    console.log(`Server running, connected to ${process.env.PORT}`);
  });
});
