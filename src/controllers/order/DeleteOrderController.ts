import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

class DeleteOrderController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const deleteOrderService = new DeleteOrderService();
    const service = await deleteOrderService.execute(id);

    return response.json(service);
  }
}

export { DeleteOrderController };
