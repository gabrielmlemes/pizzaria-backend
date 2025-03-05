"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserCotroller_1 = require("./controllers/user/DetailUserCotroller");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const multer_2 = __importDefault(require("./config/multer"));
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const DeleteOrderController_1 = require("./controllers/order/DeleteOrderController");
const AddItemOrderController_1 = require("./controllers/order/AddItemOrderController");
const RemoveItemOrderController_1 = require("./controllers/order/RemoveItemOrderController");
const SendOrderCotroller_1 = require("./controllers/order/SendOrderCotroller");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// ROTAS USER
router.post("/users", new CreateUserController_1.CreateUserController().handle); // criar usuário
router.post("/session", new AuthUserController_1.AuthUserController().handle); // logar usuário
router.get("/me", isAuthenticated_1.isAthenticated, new DetailUserCotroller_1.DetailUserController().handle); // detalhes do usuário
// ROTAS CATEGORY
router.post("/category", isAuthenticated_1.isAthenticated, new CreateCategoryController_1.CreateCategoryController().handle); // criar categoria
router.get("/category", isAuthenticated_1.isAthenticated, new ListCategoryController_1.ListCategoryController().handle); // listar categorias
// ROTAS PRODUCT
// router.post(
//   "/product",
//   isAthenticated,
//   upload.single("file"),
//   new CreateProductController().handle
// ); // criar produto
router.post("/product", isAuthenticated_1.isAthenticated, new CreateProductController_1.CreateProductController().handle); // criar produto
router.get("/category/product", isAuthenticated_1.isAthenticated, new ListByCategoryController_1.ListByCategoryController().handle); // listar produtos por categoria
// ROTAS ORDER
router.post("/order", isAuthenticated_1.isAthenticated, new CreateOrderController_1.CreateOrderController().handle); // criar pedido
router.delete("/order", isAuthenticated_1.isAthenticated, new DeleteOrderController_1.DeleteOrderController().handle);
router.post("/order/item", isAuthenticated_1.isAthenticated, new AddItemOrderController_1.AddItemOrderController().handle); // adicionar item ao pedido
router.delete('/order/item', isAuthenticated_1.isAthenticated, new RemoveItemOrderController_1.RemoveItemOrderController().handle); // remover item do pedido
router.put('/order/send', isAuthenticated_1.isAthenticated, new SendOrderCotroller_1.SendOrderCotroller().handle); // enviar pedido
router.get('/orders', isAuthenticated_1.isAthenticated, new ListOrdersController_1.ListOrdersController().handle); // listar pedidos
router.get('/orders/detail', isAuthenticated_1.isAthenticated, new DetailOrderController_1.DetailOrderController().handle); // detalha o pedido
router.put('/order/finish', isAuthenticated_1.isAthenticated, new FinishOrderController_1.FinishOrderController().handle); // finalizar pedido
