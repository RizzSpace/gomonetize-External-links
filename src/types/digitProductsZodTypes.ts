import { z } from "zod";

export const getDigitalProductByIdSchema = z.object({
  productId: z.string(),
});

export const createDigitalProductSchema = z.object({
  product_img_link: z.string().url(),
  heading: z.string(),
  subheading: z.string(),
  description: z.string(),
  pricing: z.number(),
  product_domain: z.string(),
  file_url: z.string(),
  button_title: z.string(),
  email: z.boolean().nullable(),
  name: z.boolean().nullable(),
  mobile: z.boolean().nullable(),
});

export const updateDigitalProductSchema = z.object({
  productId: z.string(),
  updatedDigitalProductData: createDigitalProductSchema,
});

export const deleteDigitalProductSchema = z.object({
  productId: z.string(),
});

export type digitalProductSchemaType = z.infer<typeof createDigitalProductSchema>;
