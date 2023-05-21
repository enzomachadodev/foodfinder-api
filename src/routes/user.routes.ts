import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userCreateRequestSerializer } from "../serializers/user.serializer";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";
import { createUserController } from "../controllers/user/createUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { retrieveUserController } from "../controllers/user/retrieveUser.controller";

const userRoutes = Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userCreateRequestSerializer),
	ensureEmailNotExistsMiddleware,
	createUserController
);
userRoutes.get("", ensureAuthMiddleware, retrieveUserController);

export default userRoutes;
