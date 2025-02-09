import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    if (!id) {
      throw new Error("Category required");
    }

    const listByCategoryService = new ListByCategoryService();
    const products = await listByCategoryService.execute(id);

    return res.json(products);
  }
}

export { ListByCategoryController };
