import { z } from "zod";
import { addressCreateRequestSerializer, addressResponseSerializer } from "./address.serializer";
import { openingCreateRequestSerializer, openingResponseSerializer } from "./opening.serializer";
import { categoryResponseSerializer } from "./category.serializer";
import { userResponseSerializer } from "./user.serializer";

export const restaurantCreateRequestSerializer = z.object({
	name: z.string(),
	categoryId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Formato de Id inválido"),
	image: z.string(),
	address: addressCreateRequestSerializer,
	opening: openingCreateRequestSerializer,
});

export type RestaurantCreateRequest = z.infer<typeof restaurantCreateRequestSerializer>;

export const restaurantResponseSerializer = z.object({
	id: z.string(),
	name: z.string(),
	rating: z.string().nullable(),
	image: z.string(),
	userId: z.string(),
	categoryId: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	user: userResponseSerializer,
	category: categoryResponseSerializer,
	address: addressResponseSerializer,
	opening: openingResponseSerializer,
});

export type RestaurantResponse = z.infer<typeof restaurantResponseSerializer>;

export const listRestaurantsResponseSerializer = z.array(restaurantResponseSerializer);
