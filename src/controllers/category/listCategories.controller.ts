import { Request, Response } from "express";
import { listCategoriesResponseSerializer } from "../../serializers/category.serializer";
import { listCategoriesService } from "../../services/category/listCategories.service";

export const listCategoriesResponseController = async (req: Request, res: Response) => {
	const categories = await listCategoriesService();
	return res.status(200).json(categories);
};
