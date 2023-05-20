import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { restaurantCreateRequestSerializer } from "../serializers/restaurant.serializer";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { createRestaurantController } from "../controllers/restaurant/createRestaurant.controller";
import { ensureRestaurantNotExistsMiddleware } from "../middlewares/ensureRestaurantNotExists.middleware";

const restaurantRoutes = Router();

restaurantRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureDataIsValidMiddleware(restaurantCreateRequestSerializer),
	ensureRestaurantNotExistsMiddleware,
	createRestaurantController
);

export default restaurantRoutes;
