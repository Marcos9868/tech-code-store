import { Request, Response } from "express";
import ProductsRepository from '../database/repositories/products.repository';

class ProductsController {
  async create(req: Request, res: Response) {
    const incoming = req.body;
    const newProduct = await ProductsRepository.createProduct(incoming);
    res.status(201).send(newProduct);
  }

  async list(req: Request, res: Response) {
    const products = await ProductsRepository.listProducts();
    res.status(200).send(products);
  }

  async show(req: Request, res: Response) {
    const idProduct = req.params.id;
    const product = await ProductsRepository.getProduct(parseInt(idProduct));
    res.status(200).send(product)
  }

  async update(req: Request, res: Response) {
    try {
      const idProduct = req.params.id;
      const modifiedProduct = req.body;
      modifiedProduct.id = idProduct;

      await ProductsRepository.updateProduct(modifiedProduct);
      res.status(200).send(modifiedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Failed to change product information' });
    }

  }

  async remove(req: Request, res: Response) {
    try {
      const { id, name } = req.body;
      await ProductsRepository.removeProduct(id, name);
      res.status(200)
    } catch (error) {
      res.status(400)
    }
  }
}

export default new ProductsController();