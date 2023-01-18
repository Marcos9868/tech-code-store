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
    const name = req.params.name;
    const product = await ProductsRepository.getProduct(name);
    res.status(200).send(product)
  }

  async update(req: Request, res: Response) {

  }

  async remove(req: Request, res: Response) {

  }
}

export default new ProductsController();