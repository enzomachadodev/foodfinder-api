import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
	restaurantCreateRequestSerializer,
	restaurantUpdateRequestSerializer,
} from "../serializers/restaurant.serializer";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { createRestaurantController } from "../controllers/restaurant/createRestaurant.controller";
import { ensureRestaurantDataNotExistsMiddleware } from "../middlewares/ensureRestaurantDataNotExists.middleware";
import { ensureValidParamsIdMiddleware } from "../middlewares/ensureValidParamsId.middleware";
import { ensureRestaurantExists } from "../middlewares/ensureRestaurantExists.middleware";
import { updateRestaurantController } from "../controllers/restaurant/updateRestaurant.controller";
import { deleteRestaurantController } from "../controllers/restaurant/deleteRestaurant.controller";
import { ensureIsRestaurantOwnerOrAdminMiddleware } from "../middlewares/ensureIsRestaurantOwnerOrAdmin.middleware";
import { retrieveAllRestaurantsController } from "../controllers/restaurant/retrieveAllRestaurants.controller";
import { retrieveUniqueRestaurantController } from "../controllers/restaurant/retrieveUniqueRestaurant.controller";
import { ensureCategoryExists } from "../middlewares/ensureCategoryExists.middleware";

const restaurantRoutes = Router();

restaurantRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureDataIsValidMiddleware(restaurantCreateRequestSerializer),
	ensureRestaurantDataNotExistsMiddleware,
	ensureCategoryExists,
	createRestaurantController
);

restaurantRoutes.get("", retrieveAllRestaurantsController);

restaurantRoutes.get("/:id", ensureValidParamsIdMiddleware, retrieveUniqueRestaurantController);

restaurantRoutes.patch(
	"/:id",
	ensureAuthMiddleware,
	ensureValidParamsIdMiddleware,
	ensureRestaurantExists,
	ensureIsRestaurantOwnerOrAdminMiddleware,
	ensureDataIsValidMiddleware(restaurantUpdateRequestSerializer),
	ensureRestaurantDataNotExistsMiddleware,
	ensureCategoryExists,
	updateRestaurantController
);

restaurantRoutes.delete(
	"/:id",
	ensureAuthMiddleware,
	ensureValidParamsIdMiddleware,
	ensureRestaurantExists,
	ensureIsRestaurantOwnerOrAdminMiddleware,
	deleteRestaurantController
);

export default restaurantRoutes;
