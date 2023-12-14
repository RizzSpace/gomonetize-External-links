import { z } from "zod";
import { createDigitalProductSchema } from "../../validations/digitProductsZod";

export type IDigital = z.infer<typeof createDigitalProductSchema>;