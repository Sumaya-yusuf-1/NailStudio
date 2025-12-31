"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Design_1 = require("./models/Design");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        const allowed = [
            "http://localhost:3000",
            "https://nail-studio-nine.vercel.app",
        ];
        const isVercelPreview = origin.endsWith(".vercel.app");
        if (allowed.includes(origin) || isVercelPreview)
            return callback(null, true);
        return callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
}));
// ✅ Express 5-safe preflight route
app.options("/*", (0, cors_1.default)());
// health check
app.get("/", (_req, res) => {
    res.send("Hello from NailStudio backend!");
});
// ---- API: get all designs ----
app.get("/api/designs", async (_req, res) => {
    try {
        const designs = await Design_1.Design.find().sort({ createdAt: -1 }).lean();
        res.json(designs);
    }
    catch (err) {
        console.error("Error fetching designs:", err);
        res.status(500).json({ message: "Failed to load designs" });
    }
});
// ---- API: create design ----
app.post("/api/designs", async (req, res) => {
    try {
        const { shape, length, colorHex, glitterOn, sticker } = req.body;
        // basic validation
        if (!shape || !length || !colorHex) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const design = await Design_1.Design.create({
            shape,
            length,
            colorHex,
            glitterOn: !!glitterOn,
            sticker: sticker ?? null,
            savedAt: new Date(),
        });
        res.status(201).json(design);
    }
    catch (err) {
        console.error("Error saving design:", err);
        res.status(500).json({ message: "Failed to save design" });
    }
});
// ---- API: delete design by id ----
app.delete("/api/designs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Design_1.Design.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.json({ message: "Design deleted", id });
    }
    catch (err) {
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
        }
        else {
            await mongoose_1.default.connect(MONGO_URI);
            console.log("✅ Connected to MongoDB");
        }
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`🚀 NailStudio backend running on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}
start();
