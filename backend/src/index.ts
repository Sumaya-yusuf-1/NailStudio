import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from NailStudio backend!");
});

// --- MongoDB connection ---
const MONGO_URI = process.env.MONGO_URI || "";

async function start() {
  try {
    if (!MONGO_URI) {
      console.warn("⚠️  No MONGO_URI set in .env – skipping Mongo connection");
    } else {
      await mongoose.connect(MONGO_URI);
      console.log("✅ Connected to MongoDB");
    }

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 NailStudio backend running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();