import { Request, Response, NextFunction } from 'express';
import { ZodError, z } from 'zod';

const errorSchema = z.object({
  customMessage: z.string().nullable(),
})

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  let status = 500;
  let errorMessage = "Internal server error";

  if (error instanceof ZodError) {
    const errorMessages = error.errors.map((error) => {
      const fieldName = error.path.join('.');
      const errorMessage = error.message;
      return `Error in field '${fieldName}': ${errorMessage}`;
  });

    res.status(400).json({ success: false, message: errorMessages });
  } else {
    const validationResult = errorSchema.safeParse(error);
    if (validationResult.success) {
      errorMessage = `validationResult.data.customMessage:${error}` || 'Internal server error';
      res.status(status).json({ success: false, message: errorMessage });
    } else {
      res.status(status).json({ success: false, message: errorMessage });
    }
  }

}