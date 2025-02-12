import { Request, Response } from "express";
import { AddItemOrderService } from "../../services/order/AddItemOrderService";

class AddItemOrderController {
  async handle(req: Request, res: Response) {
    const { amount, product_id, order_id } = req.body;

    const addItemOrderService = new AddItemOrderService();
    const item = addItemOrderService.execute({
      amount,
      product_id,
      order_id,
    });

    return res.json(item);
  }
}

export { AddItemOrderController };
