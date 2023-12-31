import { NextFunction, Request, Response } from "express";
import * as digitalProductService from '../../service/digitalProductsService/digitalProductsService';
import { createDigitalProductSchema, deleteDigitalProductSchema, getDigitalProductByIdSchema, updateDigitalProductSchema } from "../../validations/digitProductsZod";

export const getAllDigitalProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const digitalProducts = await digitalProductService.getAllDigitalProducts();

    res.status(200).json({ success: true, message: "Digital products retrieved successfully", data: digitalProducts });

  } catch (error: any) {
    error.customMessage = "Error fetching digital products";
    next(error);
  }
}

export const getDigitalProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = getDigitalProductByIdSchema.parse(req.params)
    const digitalProduct = await digitalProductService.getDigitalProductById(Number(productId));

    res.status(200).json({ success: true, message: "Digital product retrieved successfully", data: digitalProduct });

  } catch (error: any) {
    error.customMessage = "Error fetching digital product by ID";
    next(error);
  }
}

export const createDigitalProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const digitalProductData = createDigitalProductSchema.parse(req.body);
    const createdDigitalProduct = await digitalProductService.createDigitalProduct(digitalProductData);

    res.status(200).json({ success: true, message: "Digital product created successfully", data: createdDigitalProduct });

  } catch (error: any) {
    error.customMessage = "Error creating digital product";
    next(error);
  }
}

export const updateDigitalProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const DigitalProductData = updateDigitalProductSchema.parse(req.body);

    const updatedDigitalProductData = await digitalProductService.updateDigitalProduct(DigitalProductData.product_id, DigitalProductData.updatedDigitalProductData);

    res.status(200).json({ success: true, message: "Digital product updated successfully", data: updatedDigitalProductData });
    
  } catch (error: any) {
    error.customMessage = "Error updating digital product";
    next(error);
  }
}

export const deleteDigitalProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = deleteDigitalProductSchema.parse(req.params);

    await digitalProductService.deleteDigitalProduct(Number(productId));

    res.status(200).json({ success: true, message: "Digital product deleted successfully" });

  } catch (error: any) {
    error.customMessage = "Error deleting digital product";
    next(error);
  }
}