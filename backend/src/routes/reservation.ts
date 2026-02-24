import express from "express";
import * as reservation from "../controllers/reservation.js";
const router = express.Router();

router.route("/").post(reservation.createReservation);

export default router;
