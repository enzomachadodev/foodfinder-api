import prisma from "../../prismadb";
import {
	RestaurantResponse,
	listRestaurantsResponseSerializer,
} from "../../serializers/restaurant.serializer";

export const retrieveRestaurantsByUserService = async (
	userId: string
): Promise<RestaurantResponse[]> => {
	const restaurants = await prisma.restaurant.findMany({
		where: {
			userId: userId,
		},
		include: {
			category: true,
		},
	});

	const validatedData = listRestaurantsResponseSerializer.parse(restaurants);

	return validatedData;
};
