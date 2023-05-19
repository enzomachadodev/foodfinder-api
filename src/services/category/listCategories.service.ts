import prisma from "../../prismadb";
import {
	CategoryResponse,
	listCategoriesResponseSerializer,
} from "../../serializers/category.serializer";

export const listCategoriesService = async (): Promise<CategoryResponse[]> => {
	const categories = await prisma.category.findMany();

	const validatedData = listCategoriesResponseSerializer.parse(categories);

	return validatedData;
};
