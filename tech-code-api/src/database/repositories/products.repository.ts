import db from "../config";
import Product from "../../models/product.model";

class ProductsRepository {
  async createProduct(product: Product) {
    const script = `
      INSERT INTO products
      (name, image, description, price, quantity)
      VALUES (
        $1, $2, $3, $4, $5
      )
      RETURNING id = $6
    `;

    const values = [
      product.name, 
      product.image, 
      product.description, 
      product.price, 
      product.quantity, 
      product.id
    ];

    const { rows } = await db.query(script, values);
    const [ newProduct ] = rows;
    return newProduct.id;
  }

  async listProducts(): Promise<Product[]> {
    const query = `
      SELECT * FROM products;
    `;

    const { rows } = await db.query<Product>(query);

    return rows || [];
  }

  async getProduct(id: number): Promise<Product> {
    const query = `
      SELECT * FROM products
      WHERE id = $1
    `;

    const values = [id];
    const { rows } = await db.query<Product>(query, values);
    const [ product ] = rows;

    return product || [];
  }

  async updateProduct(product: Product): Promise<void> {
    const script = `
      UPDATE products
      SET
        name = $1
        description = $2,
        price = $3,
        quantity = $4
      WHERE id = $5 
    `;

    const values = [
      product.name,
      product.description, 
      product.price, 
      product.quantity, 
      product.id
    ];

    await db.query(script, values);
  }

  async removeProduct(id: number, name: string): Promise<void> {
    const script = `
      DELETE FROM products
      WHERE id = $1 AND name = $2 
    `;

    const values = [id, name];
    await db.query(script, values);
  }
}

export default new ProductsRepository();