import { Router } from 'express';

import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/products', productController.create);
productRouter.get('/products', productController.getAll);

export default productRouter;
