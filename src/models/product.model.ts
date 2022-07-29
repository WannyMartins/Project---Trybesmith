import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);

    const [{ insertId }] = result;

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const sql = 'SELECT * FROM Trybesmith.Products;';

    const [result] = await this.connection.execute(sql);

    return result as Product[];
  }
}