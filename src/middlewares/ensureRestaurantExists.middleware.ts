import { NextFunction, Request, Response } from "express";
import prisma from "../prismadb";
import { AppError } from "../errors/appError";
import { restaurantResponseSerializer } from "../serializers/restaurant.serializer";

export const ensureRestaurantExists = async (req: Request, res: Response, next: NextFunction) => {
	const foundRestaurant = await prisma.restaurant.findUnique({
		where: {
			id: req.params.id,
		},
		include: {
			category: true,
		},
	});

	if (!foundRestaurant) {
		throw new AppError("Estabelecimento não encontrado", 404);
	}

	const validatedData = restaurantResponseSerializer.parse(foundRestaurant);

	req.restaurant = validatedData;

	return next();
};
