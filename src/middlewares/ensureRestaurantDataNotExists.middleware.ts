import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";

export const ensureRestaurantDataNotExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const restaurantId = req.params.id;
	const { name, address } = req.body;

	if (name) {
		if (restaurantId) {
			const foundRestaurant = await prisma.restaurant.findUnique({
				where: {
					id: restaurantId,
				},
			});
			if (foundRestaurant?.name === name) {
				return next();
			}
		}
		const restaurantByName = await prisma.restaurant.findUnique({
			where: {
				name: name,
			},
		});

		if (restaurantByName) {
			throw new AppError("Já existe um estabelecimento com esse nome", 409);
		}
	}

	if (address) {
		const restaurantByAddress = await prisma.restaurant.findFirst({
			where: {
				address: address,
			},
		});

		if (restaurantByAddress) {
			throw new AppError("Já existe um estabelecimento neste endereço", 409);
		}
	}

	return next();
};
