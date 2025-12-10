import mongoose from "mongoose";
import dotenv from "dotenv";
import { Design } from "./models/Design";

dotenv.config();

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("No MONGO_URI in .env");
    process.exit(1);
  }

  await mongoose.connect(uri);

  await Design.deleteMany();

  await Design.insertMany([
    {
      shape: "oval",
      length: "medium",
      colorHex: "#D96565",
      glitterOn: true,
      sticker: null,
    },
    {
      shape: "square",
      length: "short",
      colorHex: "#F4C3AA",
      glitterOn: false,
      sticker: "⭐",
    },
  ]);

  console.log("✅ Seed done");
  process.exit(0);
}

run();