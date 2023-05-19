import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { sessionRequestSerializer } from "../serializers/session.serializer";
import { createSessionController } from "../controllers/session/createSession.controller";

const sessionRoutes = Router();

sessionRoutes.post(
	"",
	ensureDataIsValidMiddleware(sessionRequestSerializer),
	createSessionController
);

export default sessionRoutes;
