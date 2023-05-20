import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";

export const ensureCategoryExists = async (req: Request, res: Response, next: NextFunction) => {
	const { categoryId } = req.body;

	if (categoryId) {
		const foundCategory = await prisma.category.findUnique({
			where: {
				id: categoryId,
			},
		});

		if (!foundCategory) {
			throw new AppError("Essa categoria não existe");
		}
	}

	return next();
};
