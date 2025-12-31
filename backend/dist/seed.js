"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Design_1 = require("./models/Design");
dotenv_1.default.config();
async function run() {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error("No MONGO_URI in .env");
        process.exit(1);
    }
    await mongoose_1.default.connect(uri);
    await Design_1.Design.deleteMany();
    await Design_1.Design.insertMany([
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
