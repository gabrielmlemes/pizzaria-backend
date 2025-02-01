import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService(); // cria uma instância do service
    const user = await createUserService.execute({
      name,
      email,
      password,
    }); // executa o método do service passando os dados da requisição,  e apenas atribuindo a uma const user

    return res.json(user);
  }
}

export { CreateUserController };
