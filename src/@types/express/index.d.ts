import * as express from "express";
import { UserResponse } from "../../serializers/user.serializer";
import { CategoryResponse } from "../../serializers/category.serializer";
import { RestaurantResponse } from "../../serializers/restaurant.serializer";

declare global {
	namespace Express {
		interface Request {
			user: UserResponse;
			category: CategoryResponse;
			restaurant: RestaurantResponse;
		}
	}
}
