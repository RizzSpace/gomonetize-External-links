import express, { Router } from 'express';
const digitalProductRouter: Router = express.Router();
import { createDigitalProduct, deleteDigitalProduct, getAllDigitalProducts, getDigitalProductById, updateDigitalProduct } from "../../controller/digitalProductsController/digitalProductsController";

digitalProductRouter.get('/', getAllDigitalProducts);
digitalProductRouter.get('/:productId', getDigitalProductById);
digitalProductRouter.post('/create', createDigitalProduct);
digitalProductRouter.put('/:query/update', updateDigitalProduct);
digitalProductRouter.delete('/:productId/delete', deleteDigitalProduct);

export default digitalProductRouter;