// import "../test/setupMock.js";
import request from "supertest";
import app from "../src/app.js";

describe("POST /book", () => {
  it("should successfully create a new reservation", async () => {
    const futureDate = new Date();
    futureDate.setHours(14, 0, 0, 0);
    const res = await request(app).post("/book").send({
      tableNumber: 3,
      name: "Test Player",
      email: "test@player.com",
      startTime: futureDate.toISOString(),
      duration: 2,
      contact: "09123456789",
      attendees: 10,
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.totalPrice).toBe(300);
  });

  it("should prevent double-booking the same table at the same time", async () => {
    const baseDate = new Date();
    baseDate.setHours(14, 0, 0, 0);
    const startTime1 = baseDate.toISOString();

    const overlappingDate = new Date(baseDate);
    overlappingDate.setHours(15, 0, 0, 0);
    const startTime2 = overlappingDate.toISOString();

    await request(app).post("/book").send({
      tableNumber: 1,
      name: "First Broker",
      email: "first@player.com",
      startTime: startTime1,
      duration: 2,
      contact: "09123456789",
      attendees: 10,
    });

    const res = await request(app).post("/book").send({
      tableNumber: 1,
      name: "Second Broker",
      email: "second@player.com",
      startTime: startTime2,
      duration: 2,
      contact: "09123456789",
      attendees: 10,
    });

    expect(res.status).toBe(409);
    expect(res.body.message).toMatch(/already booked/i);
  });
});
