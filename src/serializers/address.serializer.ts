import { z } from "zod";

export const addressCreateRequestSerializer = z.object({
	zipCode: z.string(),
	city: z.string(),
	state: z.string(),
	street: z.string(),
	district: z.string(),
	number: z.number().int(),
	complement: z.string().optional(),
});

export const addressResponseSerializer = z.object({
	id: z.string(),
	zipCode: z.string(),
	city: z.string(),
	state: z.string(),
	street: z.string(),
	district: z.string(),
	number: z.number().int(),
	complement: z.string().nullable(),
});
