import { Router } from "express";

const productsRoute = Router();

productsRoute.get('/products');
productsRoute.get('/products/:id');
productsRoute.post('/products');
productsRoute.put('/products/:id');
productsRoute.delete('/products/:id');

export default productsRoute;