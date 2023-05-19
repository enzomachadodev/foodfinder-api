import * as express from "express";
import { UserResponse } from "../../serializers/user.serializer";

declare global {
	namespace Express {
		interface Request {
			user: UserResponse;
		}
	}
}
