import { z } from "zod";

export const addressCreateRequestSerializer = z.object({
	zipCode: z.string(),
	city: z.string(),
	state: z.string(),
	street: z.string(),
	number: z.number().int(),
	complement: z.string().optional(),
});

export const addressUpdateRequestSerializer = z
	.object({
		zipCode: z.string().optional(),
		city: z.string().optional(),
		state: z.string().optional(),
		street: z.string().optional(),
		number: z.number().int().optional(),
		complement: z.string().optional(),
	})
	.optional();

export const addressResponseSerializer = z.object({
	id: z.string(),
	zipCode: z.string(),
	city: z.string(),
	state: z.string(),
	street: z.string(),
	number: z.number().int(),
	complement: z.string().nullable(),
});
