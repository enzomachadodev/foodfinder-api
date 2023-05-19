import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";

export const ensureEmailNotExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;

	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (user) {
		throw new AppError("Este email já está sendo usado", 409);
	}

	return next();
};
