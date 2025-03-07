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
exports.RemoveItemOrderController = void 0;
const RemoveItemOrderService_1 = require("../../services/order/RemoveItemOrderService");
class RemoveItemOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const item_id = req.query.item_id;
            const removeItemOrderService = new RemoveItemOrderService_1.RemoveItemOrderService();
            const result = yield removeItemOrderService.execute(item_id);
            return res.json(result);
        });
    }
}
exports.RemoveItemOrderController = RemoveItemOrderController;
