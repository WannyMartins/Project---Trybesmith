import { Router } from 'express';

import OrderController from '../controller/order.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

export default orderRouter;
