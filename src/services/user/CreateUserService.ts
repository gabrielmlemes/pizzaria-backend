import prismaClient from "../../prisma/prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !password) {
      throw new Error("Invalid inputs");
    }

    // Verifica se o email já existe
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    // Criptografa a senha antes de cadastrar no banco
    const hashedPassword = await hash(password, 8);

    // Cadastra o usuário no banco
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      }, // o select é importante pois ele diz o que vai ser devolvido, e não se deve devolver o password
    });

    return user;
  }
}

export { CreateUserService };
