import mongoose, { Schema, Document } from "mongoose";

export interface IDesign extends Document {
  shape: string;
  length: string;
  colorHex: string;
  glitterOn: boolean;
  sticker: string | null;
  savedAt: Date;
}

const DesignSchema = new Schema<IDesign>(
  {
    shape: { type: String, required: true },
    length: { type: String, required: true },
    colorHex: { type: String, required: true },
    glitterOn: { type: Boolean, required: true },
    sticker: { type: String, default: null },
    savedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Design = mongoose.model<IDesign>("Design", DesignSchema);