import { z } from "zod";

export const schemaCakeForm = z.object({
  title: z
    .string({ required_error: "Title cannot be empty" })
    .min(4, "the Title must be at least 5 characters long"),
  rating: z
    .string({ required_error: "Rating cannot be empty" })
    .max(2, "the Rating mut be at least 2 characters long"),
  description: z
    .string({ required_error: "Description cannot be empty" })
    .min(7, "the Description must be at least 7 characters long"),
  image: z.string({ required_error: "Image cannot be empty" }),
});
