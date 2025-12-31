"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDesigns = getDesigns;
exports.createDesign = createDesign;
exports.deleteDesign = deleteDesign;
const Design_1 = require("../models/Design");
// GET /api/designs
async function getDesigns(req, res) {
    try {
        const designs = await Design_1.Design.find().sort({ createdAt: -1 }); // newest first
        res.json(designs);
    }
    catch (err) {
        console.error("Error getting designs:", err);
        res.status(500).json({ message: "Failed to load designs" });
    }
}
// POST /api/designs
async function createDesign(req, res) {
    try {
        const { shape, length, colorHex, glitterOn, sticker } = req.body;
        // simple validation
        if (!shape || !length || !colorHex) {
            return res.status(400).json({
                message: "shape, length and colorHex are required",
            });
        }
        const newDesign = await Design_1.Design.create({
            shape,
            length,
            colorHex,
            glitterOn: !!glitterOn,
            sticker: sticker ?? null,
        });
        res.status(201).json(newDesign);
    }
    catch (err) {
        console.error("Error creating design:", err);
        res.status(500).json({ message: "Failed to create design" });
    }
}
// DELETE /api/designs/:id
async function deleteDesign(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Design_1.Design.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.json({ message: "Deleted" });
    }
    catch (err) {
        console.error("Error deleting design:", err);
        res.status(500).json({ message: "Failed to delete design" });
    }
}
