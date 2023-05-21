import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../errors/appError";
export const ensureValidParamsIdMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const schema = z.string().regex(/^[0-9a-fA-F]{24}$/);

	try {
		schema.parse(req.params.id);
		return next();
	} catch (err) {
		throw new AppError("Formato de Id inválido", 400);
	}
};
