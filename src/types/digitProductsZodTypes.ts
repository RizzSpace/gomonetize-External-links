import { z } from "zod";

export const getDigitalProductByIdSchema = z.object({
  productId: z.number(),
});

export const createDigitalProductSchema = z.object({
  productImgLink: z.string(),
  heading: z.string(),
  subheading: z.string(),
  description: z.string(),
  pricing: z.number(),
  product_domain: z.string(),
  file_url: z.string(),
  button_title: z.string(),
});

export const updateDigitalProductSchema = z.object({
  productId: z.number(),
  updatedDigitalProductData: createDigitalProductSchema,
});

export const deleteDigitalProductSchema = z.object({
  productId: z.number(),
});

export type digitalProductSchemaType = z.infer<typeof createDigitalProductSchema>;
