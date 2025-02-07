import { Request, Response } from "express";
import { CreateCaterogyService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
         const {name} = req.body

        const createCategoryService = new CreateCaterogyService()
        const category = await createCategoryService.execute(name)

        return res.json(category)
    }
}

export {CreateCategoryController}