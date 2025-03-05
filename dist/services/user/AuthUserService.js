"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma/prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            // Busca o usuário no banco pelo email
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email,
                },
            });
            if (!user) {
                throw new Error("User/Password incorrect");
            }
            // Verifica se a senha enviada é a mesma do banco de dados (que está criptografada)
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new Error("User/Password incorrect");
            }
            // Se tiver tudo certo, gera o token JWT do usuário
            const token = (0, jsonwebtoken_1.sign)(
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
            });
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                token: token,
            };
        });
    }
}
exports.AuthUserService = AuthUserService;
