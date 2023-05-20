import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const ensureIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const authUser = req.user;

	if (!authUser.isAdmin) {
		throw new AppError("Não possui permissão");
	}

	return next();
};
