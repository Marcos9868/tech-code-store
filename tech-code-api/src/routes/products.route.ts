import { Router } from "express";
import ProductsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.get('/products', ProductsController.list);
productsRoute.get('/products/:id', ProductsController.show);
productsRoute.post('/products', ProductsController.create);
productsRoute.put('/products/:id', ProductsController.update);
productsRoute.delete('/products/:id', ProductsController.remove);

export default productsRoute;