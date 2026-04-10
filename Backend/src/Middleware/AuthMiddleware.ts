import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const UserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized User" });
    }

    // Format: "Bearer token"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN as string) as { id: string };

    // attach userId to request
    (req as any).userId = decoded.id;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized User" });
  }
};