import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";

export const ensureRestaurantNotExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name, address } = req.body;

	const restaurantByName = await prisma.restaurant.findUnique({
		where: {
			name: name,
		},
	});

	if (restaurantByName) {
		throw new AppError("Já existe um estabelecimento com esse nome", 409);
	}

	const restaurantByAddress = await prisma.restaurant.findFirst({
		where: {
			address: address,
		},
	});

	if (restaurantByAddress) {
		throw new AppError("Já existe um estabelecimento neste endereço", 409);
	}

	return next();
};
