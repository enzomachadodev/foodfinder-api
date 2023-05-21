import { hash } from "bcrypt";
import prisma from "../../prismadb";
import {
	UserCreateRequest,
	UserResponse,
	userResponseSerializer,
} from "../../serializers/user.serializer";
export const createUserService = async ({
	name,
	email,
	password,
	image,
}: UserCreateRequest): Promise<UserResponse> => {
	const hashPassword = await hash(password, 10);

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			password: hashPassword,
			image: image ? image : "https://i.stack.imgur.com/l60Hf.png",
		},
	});

	const validatedData = userResponseSerializer.parse(newUser);

	return validatedData;
};
