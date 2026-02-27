import * as socketModule from "../src/config/socket.js";
import { jest } from "@jest/globals";
jest.mock("../src/config/socket.ts", () => ({
  getIO: jest.fn(() => ({
    emit: jest.fn(),
  })),
}));
