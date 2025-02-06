import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// tipando o token
interface Payload {
  sub: string;
}

export function isAthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //  receber o token
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validar o token
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // Recupera o id do token e colocar dentro de uma varável user_id dentro do req
    req.user_id = sub;

    return next();
  } catch (error) {
    res.status(401).end();
  }

  return next();
}
