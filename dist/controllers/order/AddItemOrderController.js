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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemOrderController = void 0;
const AddItemOrderService_1 = require("../../services/order/AddItemOrderService");
class AddItemOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, product_id, order_id } = req.body;
            const addItemOrderService = new AddItemOrderService_1.AddItemOrderService();
            const item = addItemOrderService.execute({
                amount,
                product_id,
                order_id,
            });
            return res.json(item);
        });
    }
}
exports.AddItemOrderController = AddItemOrderController;
