import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserCotroller";
import { isAthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from './config/multer'
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS USER
router.post("/users", new CreateUserController().handle); // criar usuário
router.post("/session", new AuthUserController().handle); // logar usuário
router.get("/me", isAthenticated, new DetailUserController().handle); // detalhes do usuário

// ROTAS CATEGORY
router.post("/category", isAthenticated, new CreateCategoryController().handle); // criar categoria
router.get("/category", isAthenticated, new ListCategoryController().handle); // listar categorias

// ROTAS PRODUCT
router.post('/product', isAthenticated, upload.single('file'), new CreateProductController().handle); // criar produto
router.get('/category/product', isAthenticated, new ListByCategoryController().handle); // listar produtos por categoria

// ROTAS ORDER
router.post('/order', isAthenticated, new CreateOrderController().handle); // criar pedido
router.delete('/order', isAthenticated, new DeleteOrderController().handle)

export { router };