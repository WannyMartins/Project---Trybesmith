import { Router } from 'express';

import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/products', productController.create);

export default productRouter;
