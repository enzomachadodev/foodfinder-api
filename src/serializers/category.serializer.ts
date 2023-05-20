import { z } from "zod";

export const categoryCreateRequestSerializer = z.object({
	name: z.string(),
});

export type CategoryCreateRequest = z.infer<typeof categoryCreateRequestSerializer>;

export const categoryResponseSerializer = z.object({
	id: z.string(),
	name: z.string(),
});

export type CategoryResponse = z.infer<typeof categoryResponseSerializer>;

export const listCategoriesResponseSerializer = z.array(categoryResponseSerializer);
