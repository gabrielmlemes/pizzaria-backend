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
    next();
  } catch (error) {
    res.status(401).end();
  }

  return next();
}
