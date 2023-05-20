import { AppError } from "../../errors/appError";
import prisma from "../../prismadb";
import {
	RestaurantCreateRequest,
	RestaurantResponse,
	restaurantResponseSerializer,
} from "../../serializers/restaurant.serializer";

export const createRestaurantService = async (
	userId: string,
	{ name, image, categoryId, opening, address }: RestaurantCreateRequest
): Promise<RestaurantResponse> => {
	const foundCategory = await prisma.category.findUnique({
		where: {
			id: categoryId,
		},
	});

	if (!foundCategory) {
		throw new AppError("Essa categoria não existe");
	}

	const newRestaurant = await prisma.restaurant.create({
		data: {
			name,
			image,
			userId,
			categoryId,
		},
		include: {
			user: true,
			category: true,
		},
	});

	const newAddress = await prisma.address.create({
		data: {
			...address,
			restaurantId: newRestaurant.id,
		},
	});

	const newOpening = await prisma.opening.create({
		data: {
			...opening,
			restaurantId: newRestaurant.id,
		},
	});

	const restaurantResponse = {
		...newRestaurant,
		address: newAddress,
		opening: newOpening,
	};

	const validatedData = restaurantResponseSerializer.parse(restaurantResponse);

	return validatedData;
};
