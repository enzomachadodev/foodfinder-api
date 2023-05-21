import { AppError } from "../../errors/appError";
import prisma from "../../prismadb";
import {
	RestaurantUpdateRequest,
	RestaurantResponse,
	restaurantCompleteResponseSerializer,
} from "../../serializers/restaurant.serializer";

export const UpdateRestaurantService = async (
	restaurantId: string,
	{ name, image, categoryId, address, opening }: RestaurantUpdateRequest
): Promise<RestaurantResponse> => {
	const data = { name, image, categoryId };

	if (address) {
		await prisma.address.update({
			where: {
				restaurantId: restaurantId,
			},
			data: {
				...address,
			},
		});
	}

	if (opening) {
		await prisma.opening.update({
			where: {
				restaurantId: restaurantId,
			},
			data: {
				...opening,
			},
		});
	}

	const updatedRestaurant = await prisma.restaurant.update({
		where: {
			id: restaurantId,
		},
		data: {
			...data,
		},
		include: {
			user: true,
			category: true,
			address: true,
			opening: true,
		},
	});

	const validatedData = restaurantCompleteResponseSerializer.parse(updatedRestaurant);

	return validatedData;
};
