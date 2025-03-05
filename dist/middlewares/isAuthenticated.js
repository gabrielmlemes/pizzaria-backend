"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAthenticated = isAthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAthenticated(req, res, next) {
    //  receber o token
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        // validar o token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        // Recupera o id do token e colocar dentro de uma varável user_id dentro do req
        req.user_id = sub;
        return next();
    }
    catch (error) {
        res.status(401).end();
    }
    return next();
}
