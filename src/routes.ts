import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserCotroller";
import { isAthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemOrderController } from "./controllers/order/AddItemOrderController";
import { RemoveItemOrderController } from "./controllers/order/RemoveItemOrderController";
import { SendOrderCotroller } from "./controllers/order/SendOrderCotroller";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// ROTAS USER
router.post("/users", new CreateUserController().handle); // criar usuário
router.post("/session", new AuthUserController().handle); // logar usuário
router.get("/me", isAthenticated, new DetailUserController().handle); // detalhes do usuário

// ROTAS CATEGORY
router.post("/category", isAthenticated, new CreateCategoryController().handle); // criar categoria
router.get("/category", isAthenticated, new ListCategoryController().handle); // listar categorias

// ROTAS PRODUCT
// router.post(
//   "/product",
//   isAthenticated,
//   upload.single("file"),
//   new CreateProductController().handle
// ); // criar produto
router.post(
  "/product",
  isAthenticated,
  new CreateProductController().handle
); // criar produto
router.get(
  "/category/product",
  isAthenticated,
  new ListByCategoryController().handle
); // listar produtos por categoria

// ROTAS ORDER
router.post("/order", isAthenticated, new CreateOrderController().handle); // criar pedido
router.delete("/order", isAthenticated, new DeleteOrderController().handle);
router.post("/order/item", isAthenticated, new AddItemOrderController().handle); // adicionar item ao pedido
router.delete('/order/item', isAthenticated, new RemoveItemOrderController().handle); // remover item do pedido
router.put('/order/send', isAthenticated, new SendOrderCotroller().handle); // enviar pedido
router.get('/orders', isAthenticated, new ListOrdersController().handle); // listar pedidos
router.get('/orders/detail', isAthenticated, new DetailOrderController().handle) // detalha o pedido
router.put('/order/finish', isAthenticated, new FinishOrderController().handle); // finalizar pedido

export { router };