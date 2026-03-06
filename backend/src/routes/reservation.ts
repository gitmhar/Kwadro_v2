import express from "express";
import * as reservation from "../controllers/reservation.js";
import { verifyFirebase } from "../middleware/auth.js";
const router = express.Router();

router.post("/", verifyFirebase, reservation.createReservation);

router.get("/active", reservation.getActiveReservations);
router.route("/busy/:tableNumber").get(reservation.getBusySlots);
router.get(
  "/status/:reservationId",
  verifyFirebase,
  reservation.getReservationStatus,
);

export default router;
