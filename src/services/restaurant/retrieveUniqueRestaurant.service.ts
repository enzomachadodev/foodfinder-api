import { AppError } from "../../errors/appError";
import prisma from "../../prismadb";
import {
	RestaurantCompleteResponse,
	restaurantCompleteResponseSerializer,
} from "../../serializers/restaurant.serializer";

export const retrieveUniqueRestaurantService = async (
	restaurantId: string
): Promise<RestaurantCompleteResponse> => {
	const restaurant = await prisma.restaurant.findUnique({
		where: {
			id: restaurantId,
		},
		include: {
			user: true,
			category: true,
			address: true,
			opening: true,
		},
	});

	if (!restaurant) {
		throw new AppError("Estabelecimento não encontrado", 404);
	}

	const validatedData = restaurantCompleteResponseSerializer.parse(restaurant);

	return validatedData;
};
