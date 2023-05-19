import { z } from "zod";

export const categoryRequestSerializer = z.object({
	name: z.string(),
});

export type CategoryRequest = z.infer<typeof categoryRequestSerializer>;

export const categoryResponseSerializer = z.object({
	id: z.string(),
	name: z.string(),
});

export type CategoryResponse = z.infer<typeof categoryResponseSerializer>;

export const listCategoriesResponseSerializer = z.array(categoryResponseSerializer);
