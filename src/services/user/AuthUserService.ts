import prismaClient from "../../prisma/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    // Busca o usuário no banco pelo email
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/Password incorrect");
    }

    // Verifica se a senha enviada é a mesma do banco de dados (que está criptografada)
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/Password incorrect");
    }

    // Se tiver tudo certo, gera o token JWT do usuário
    const token = sign(
      // o que vai deixar exposto no token para caso queira acessar os dados do token (payload):
      {
        name: user.name,
        email: user.email,
      },
      // chave de acesso do token (segredo para assinar o token e garantir que ele não foi alterado):
      process.env.JWT_SECRET, // lembrar de ir no tsconfig e no "strict" colocar como false, senão fica acusando erro
      // options que devem ser informadas para o token, como quem é o dono do token e o tempo de expiração desse token
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
