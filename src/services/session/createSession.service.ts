import jwt from "jsonwebtoken";
import prisma from "../../prismadb";
import { compare } from "bcrypt";
import { SessionRequest, SessionResponse } from "../../serializers/session.serializer";
import { AppError } from "../../errors/appError";

export const createSessionService = async ({
	email,
	password,
}: SessionRequest): Promise<SessionResponse> => {
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (!user) {
		throw new AppError("Invalid user or password", 401);
	}

	const passwordMatch = await compare(password, user.password);

	if (!passwordMatch) {
		throw new AppError("Invalid user or password", 401);
	}

	const token = jwt.sign(
		{
			user: user.id,
		},
		process.env.SECRET_KEY as string,
		{
			expiresIn: "24h",
			subject: user.id,
		}
	);

	return { token };
};
