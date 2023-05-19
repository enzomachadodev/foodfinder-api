import { Request, Response } from "express";
import { createCategoryService } from "../../services/category/createCategory.service";

export const createCategoryController = async (req: Request, res: Response) => {
	const category = await createCategoryService(req.body);
	return res.status(200).json(category);
};
