import * as express from "express";
import { UserResponse } from "../../serializers/user.serializer";
import { CategoryResponse } from "../../serializers/category.serializer";

declare global {
	namespace Express {
		interface Request {
			user: UserResponse;
			category: CategoryResponse;
		}
	}
}
