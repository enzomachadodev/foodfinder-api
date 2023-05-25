import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";

export const ensureUserExists = async (req: Request, res: Response, next: NextFunction) => {
	const foundUser = await prisma.user.findUnique({
		where: {
			id: req.params.id,
		},
	});

	if (!foundUser) {
		throw new AppError("Usuário não encontrado", 404);
	}

	return next();
};
