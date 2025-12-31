import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Design } from "./models/Design";

dotenv.config();
const app = express();

app.use(express.json());

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const allowed = [
      "http://localhost:3000",
      "https://nail-studio-nine.vercel.app",
    ];

    const isVercelPreview = origin.endsWith(".vercel.app");

    if (allowed.includes(origin) || isVercelPreview) {
      return callback(null, true);
    }

    callback(new Error(`CORS blocked: ${origin}`));
  },
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));


// health check
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from NailStudio backend!");
});

// ---- API: get all designs ----
app.get("/api/designs", async (_req: Request, res: Response) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 }).lean();
    res.json(designs);
  } catch (err) {
    console.error("Error fetching designs:", err);
    res.status(500).json({ message: "Failed to load designs" });
  }
});

// ---- API: create design ----
app.post("/api/designs", async (req: Request, res: Response) => {
  try {
    const { shape, length, colorHex, glitterOn, sticker } = req.body;

    // basic validation
    if (!shape || !length || !colorHex) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const design = await Design.create({
      shape,
      length,
      colorHex,
      glitterOn: !!glitterOn,
      sticker: sticker ?? null,
      savedAt: new Date(),
    });

    res.status(201).json(design);
  } catch (err) {
    console.error("Error saving design:", err);
    res.status(500).json({ message: "Failed to save design" });
  }
});

// ---- API: delete design by id ----
app.delete("/api/designs/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Design.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Design not found" });
    }

    res.json({ message: "Design deleted", id });
  } catch (err) {
    console.error("Error deleting design:", err);
    res.status(500).json({ message: "Failed to delete design" });
  }
});
// ---- Mongo connection & server start ----
const MONGO_URI = process.env.MONGO_URI || "";

async function start() {
  try {
    if (!MONGO_URI) {
      console.warn("⚠️ No MONGO_URI set in .env");
    } else {
      await mongoose.connect(MONGO_URI);
      console.log("✅ Connected to MongoDB");
    }

  const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 NailStudio backend running on port ${PORT}`);
});
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
