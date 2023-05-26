import { z } from "zod";

export const openingCreateRequestSerializer = z.object({
	sunday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	monday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	tuesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	wednesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	thursday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	friday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	saturday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
});

export const openingUpdateRequestSerializer = z
	.object({
		sunday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		monday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		tuesday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		wednesday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		thursday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		friday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
			.optional(),
		saturday: z
			.string()
			.regex(
				/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
				"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
			)
			.or(z.literal("24 Horas"))
			.or(z.literal("Fechado"))
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
