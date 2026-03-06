import type { Request, Response, NextFunction } from "express";
import { authAdmin } from "../config/firebase.js";

export const verifyFirebase = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decodedToken = await authAdmin.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (err: any) {
    res.status(401).json({ message: "Invalid or expired token " });
  }
};
