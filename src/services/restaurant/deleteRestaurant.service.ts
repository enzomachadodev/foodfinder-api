import prisma from "../../prismadb";

export const deleteRestaurantService = async (restaurantId: string) => {
	await prisma.restaurant.delete({
		where: {
			id: restaurantId,
		},
	});

	return;
};
