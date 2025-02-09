import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { table, name } = request.body;

    const createOrderService = new CreateOrderService();
    const orders = await createOrderService.execute({
      table,
      name,
    });

    return response.json(orders);
  }
}

export { CreateOrderController };
