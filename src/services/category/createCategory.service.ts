import { AppError } from "../../errors/appError";
import prisma from "../../prismadb";
import {
	CategoryRequest,
	CategoryResponse,
	categoryResponseSerializer,
} from "../../serializers/category.serializer";

export const createCategoryService = async ({
	name,
}: CategoryRequest): Promise<CategoryResponse> => {
	const foundCategory = await prisma.category.findUnique({
		where: {
			name: name,
		},
	});

	if (foundCategory) {
		throw new AppError("Essa categoria já existe");
	}

	const newCategory = await prisma.category.create({
		data: {
			name,
		},
	});

	const validatedData = categoryResponseSerializer.parse(newCategory);

	return validatedData;
};
