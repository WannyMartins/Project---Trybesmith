import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // Referência para JSON_ARRAYAGG() no MySQL:
  // https://database.guide/json_arrayagg-create-a-json-array-from-the-rows-of-a-query-in-mysql/
    
  public async getAll(): Promise<Order[]> {
    const sql = `SELECT o.id, o.userId, 
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY userId;`;
    const [result] = await this.connection.execute(sql);
  
    return result as Order[];
  }
}