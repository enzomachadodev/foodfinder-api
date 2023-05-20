import prisma from "../../prismadb";
import {
	RestaurantResponse,
	listRestaurantsResponseSerializer,
} from "../../serializers/restaurant.serializer";

export const retrieveAllRestaurantsService = async (): Promise<RestaurantResponse[]> => {
	const restaurants = await prisma.restaurant.findMany();

	const validatedData = listRestaurantsResponseSerializer.parse(restaurants);

	return validatedData;
};
