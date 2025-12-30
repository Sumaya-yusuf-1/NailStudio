import { z } from "zod";

export const shapeSchema = z.enum([
  "round",
  "oval",
  "square",
  "squoval",
  "almond",
  "stiletto",
]);

export const lengthSchema = z.enum(["short", "medium", "long"]);

export const designSchema = z
  .object({
    shape: shapeSchema.optional(),
    length: lengthSchema.optional(),
    colorHex: z.string().optional(),
    glitterOn: z.boolean(),
    sticker: z.string().nullable(),
  })
  .superRefine((data, ctx) => {
    if (!data.shape) {
      ctx.addIssue({
        path: ["shape"],
        message: "Choose a nail shape",
        code: z.ZodIssueCode.custom,
      });
    }

    if (!data.length) {
      ctx.addIssue({
        path: ["length"],
        message: "Choose a nail length",
        code: z.ZodIssueCode.custom,
      });
    }

    if (!data.colorHex || data.colorHex === "transparent") {
      if (data.glitterOn) {
        ctx.addIssue({
          path: ["glitterOn"],
          message: "Choose a base color first",
          code: z.ZodIssueCode.custom,
        });
      }

      if (data.sticker) {
        ctx.addIssue({
          path: ["sticker"],
          message: "Choose a base color first",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

export type DesignInput = z.infer<typeof designSchema>;