import { jest, describe, it, expect } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";

describe("GET /busy/:tableNumber", () => {
  it("should return fewer slots after a booking is made", async () => {
    const tableNum = 5;
    const today = new Date();
    const testDateOnly = today.toISOString().split("T")[0];

    const startTime = new Date(today);
    startTime.setHours(10, 0, 0, 0);

    await request(app).post("/book").send({
      tableNumber: tableNum,
      startTime: startTime.toISOString(),
      duration: 2,
      name: "Table Blocker",
      email: "hello@gmail.com",
      contact: "09123456789",
      attendees: 3,
    });

    const res = await request(app).get(
      `/book/busy/${tableNum}?date=${testDateOnly}`,
    );

    expect(res.status).toBe(200);

    const busySlot = res.body[0];   // <--- huh?? What is this?

    console.log("DEBUG - Sent Date Query:", testDateOnly);
    console.log("DEBUG - Received Body:", res.body);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should return an empty array if the table has no bookings", async () => {
    const res = await request(app).get("/book/busy/99?date=2026-03-10");

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});
