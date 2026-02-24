import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected!");
  } catch (error) {
    console.error("Cannot connect on database ");
    process.exit(1);
  }
};


