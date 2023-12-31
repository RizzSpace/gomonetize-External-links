
import { IDigital } from "../../interfaces/types/digitProductsTypes";
import prisma from "../../prisma/client/prismaClient";

export const getAllDigitalProducts = async () => {
  try {
    const digitalProducts = await prisma.digitalProduct.findMany();
    return digitalProducts;
  } catch (error) {
    throw new Error(`Error fetching digital products: ${error}`);
  }
};

export const getDigitalProductById = async (productId: number) => {
  try {
    const digitalProduct = await prisma.digitalProduct.findUnique({
      where: { product_id: productId },
    });

    if (!digitalProduct) {
      throw new Error('Digital product not found');
    }

    return digitalProduct;
  } catch (error) {
    throw new Error(`Error fetching digital product by ID: ${error}`);
  }
};

export const createDigitalProduct = async (digitalProductData: IDigital) => {
  try {
    const createdDigitalProduct = await prisma.digitalProduct.create({
      data: digitalProductData,
    });

    return createdDigitalProduct;
  } catch (error) {
    throw new Error(`Error creating digital product: ${error}`);
  }
};

export const updateDigitalProduct = async (productId: number, updatedDigitalProductData: IDigital) => {
  try {

    const updatedDigitalProduct = await prisma.digitalProduct.update({
      where: { product_id: productId },
      data: updatedDigitalProductData,
    });

    return updatedDigitalProduct;
  } catch (error) {
    throw new Error(`Error updating digital product: ${error}`);
  }
};

export const deleteDigitalProduct = async (productId: number) => {
  try {
    const deletedDigitalProduct = await prisma.digitalProduct.delete({
      where: { product_id: productId },
    });

    return deletedDigitalProduct;
  } catch (error) {
    throw new Error(`Error deleting digital product: ${error}`);
  }
};