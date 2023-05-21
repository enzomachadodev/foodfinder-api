import { Request, Response } from "express";
import { createSessionService } from "../../services/session/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
	const session = await createSessionService(req.body);
	return res.status(201).json(session);
};
