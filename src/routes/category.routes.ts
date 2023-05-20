import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { categoryCreateRequestSerializer } from "../serializers/category.serializer";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { createCategoryController } from "../controllers/category/createCategory.controlle";
import { listCategoriesResponseController } from "../controllers/category/listCategories.controller";

const categoryRoutes = Router();

categoryRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureIsAdminMiddleware,
	ensureDataIsValidMiddleware(categoryCreateRequestSerializer),
	createCategoryController
);

categoryRoutes.get("", listCategoriesResponseController);

export default categoryRoutes;
