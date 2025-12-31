"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Design_1 = require("../models/Design");
const router = (0, express_1.Router)();
// GET /api/designs
router.get("/", async (_req, res) => {
    const designs = await Design_1.Design.find().sort({ createdAt: -1 });
    res.json(designs);
});
// POST /api/designs
router.post("/", async (req, res) => {
    try {
        const { shape, length, colorHex, glitterOn, sticker } = req.body;
        // enkel backend-validering
        if (!shape || !length || !colorHex) {
            return res.status(400).json({ error: "shape, length and colorHex required" });
        }
        const created = await Design_1.Design.create({
            shape,
            length,
            colorHex,
            glitterOn: !!glitterOn,
            sticker: sticker ?? null,
        });
        res.status(201).json(created);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save design" });
    }
});
// DELETE /api/designs/:id
router.delete("/:id", async (req, res) => {
    try {
        await Design_1.Design.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to delete design" });
    }
});
exports.default = router;
