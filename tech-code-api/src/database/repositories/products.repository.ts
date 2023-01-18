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

  async getProduct(name: string): Promise<Product> {
    const query = `
      SELECT * FROM products
      WHERE name = $1
    `;

    const values = [name];
    const { rows } = await db.query<Product>(query, values);
    const [ product ] = rows;

    return product || [];
  }

  async updateProduct(product: Product): Promise<void> {
    const script = `
      UPDATE products
      SET
        description = $1,
        price = $2,
        quantity = $3
      WHERE name = $4 
    `;

    const values = [
      product.description, 
      product.price, 
      product.quantity, 
      product.name
    ];

    await db.query(script, values);
  }

  async removeProduct(name: string): Promise<void> {
    const script = `
      DELETE FROM products
      WHERE name = $1
    `;

    const values = [name];
    await db.query(script, values);
  }
}

export default new ProductsRepository();