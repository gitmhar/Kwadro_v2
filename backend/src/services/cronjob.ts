import cron from "node-cron";
import { Reservation } from "../models/reservation.js";

cron.schedule("* * * * *", async () => {
  console.log(`[Cron] Running at ${new Date().toISOString()}`);
  const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
  // const oneMinuteAgo = new Date(Date.now() - 1 * 60 * 1000);
  try {
    const result = await Reservation.updateMany(
      {
        status: "pending",
        createdAt: { $lt: thirtyMinutesAgo },
      },
      {
        $set: { status: "expired" },
      },
    );

    if (result.modifiedCount > 0) {
      console.log(`Cron: Released ${result.modifiedCount} abandoned tables.`);
    }
  } catch (err: any) {
    console.error("Cron Job error: ", err);
  }
});
