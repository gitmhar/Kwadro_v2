import express from "express";
import * as reservation from "../controllers/reservation.js";
const router = express.Router();

router.route("/").post(reservation.createReservation);

router.get("/active", reservation.getActiveReservations);
router.route("/busy/:tableNumber").get(reservation.getBusySlots);

export default router;
