import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const ensureIsRestaurantOwnerOrAdminMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.user.isAdmin) {
		return next();
	}

	if (req.user.id !== req.restaurant.userId) {
		throw new AppError("Não possui permissão", 401);
	}

	return next();
};
