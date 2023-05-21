import { z } from "zod";

export const userCreateRequestSerializer = z.object({
	name: z.string(),
	email: z.string().email("Precisa ser um email valido"),
	image: z.string().default(""),
	password: z.string(),
});

export type UserCreateRequest = z.infer<typeof userCreateRequestSerializer>;

export const userUpdateRequestSerializer = z.object({
	name: z.string().nullable(),
	email: z.string().email("Precisa ser um email valido").nullable(),
	image: z.string().default(""),
	password: z.string().nullable(),
});

export type UserUpdateRequest = z.infer<typeof userUpdateRequestSerializer>;

export const userResponseSerializer = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	image: z.string(),
	isAdmin: z.boolean(),
});

export type UserResponse = z.infer<typeof userResponseSerializer>;
