"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
exports.default = {
    upload(folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: (0, path_1.resolve)(__dirname, "..", "..", folder), // indica aonde vai ser salvo arquivo
                filename: (req, file, callback) => {
                    const hash = crypto_1.default.randomBytes(16).toString("hex"); // crio um hash
                    const filename = `${hash}-${file.originalname}`; // utilizo esse hash junto ao nome do arquivo
                    return callback(null, filename); // o primeiro parametro é um erro, então não tratamos, e o segundo é o nome do arquivo
                },
            }),
        };
    },
};
