import { z } from "zod";

export const sessionRequestSerializer = z.object({
	email: z.string().email(),
	password: z.string(),
});

export type SessionRequest = z.infer<typeof sessionRequestSerializer>;

export const sessionResponseSerializer = z.object({
	token: z.string(),
});

export type SessionResponse = z.infer<typeof sessionResponseSerializer>;
