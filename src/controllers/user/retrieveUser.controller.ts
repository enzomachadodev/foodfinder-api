import { Request, Response } from "express";

export const retrieveUserController = async (req: Request, res: Response) => {
	const user = req.user;
	return res.status(200).json(user);
};
