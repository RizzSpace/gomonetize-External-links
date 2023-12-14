import express, { Router } from "express";
const router: Router = express.Router();

import digitalProductRouter from "./digitalProductRouter/digitalProductRouter";
import testRouter from "./testRouter/testRouter";
import errorRouter from "./errorRouter/errorRouter";

router.use('/digital-products', digitalProductRouter);
router.use('/test',testRouter);
router.use("*",errorRouter);

export default router;