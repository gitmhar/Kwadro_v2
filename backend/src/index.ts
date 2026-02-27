import dotenv from "dotenv";
dotenv.config();

import { createServer } from "http";
import app from "./app.js";
import { initSocket } from "./config/socket.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 3000;
const httpServer = createServer(app);

// Websocket Initialization
initSocket(httpServer);

// Localhost port connection

connectDB()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`Server running, connected to ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to DB:", error);
  });
