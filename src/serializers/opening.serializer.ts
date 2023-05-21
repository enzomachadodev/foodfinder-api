import { z } from "zod";

export const openingCreateRequestSerializer = z.object({
	sunday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	monday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	tuesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	wednesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	thursday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	friday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
	saturday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		),
});

export const openingUpdateRequestSerializer = z
	.object({
		sunday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		monday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		tuesday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		wednesday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		thursday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		friday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
		saturday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.optional(),
	})
	.optional();

export const openingResponseSerializer = z.object({
	id: z.string(),
	sunday: z.string(),
	monday: z.string(),
	tuesday: z.string(),
	wednesday: z.string(),
	thursday: z.string(),
	friday: z.string(),
	saturday: z.string(),
});

export type OpeningResponse = z.infer<typeof openingResponseSerializer>;
