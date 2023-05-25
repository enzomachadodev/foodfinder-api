import { Request, Response } from "express";
import { retrieveRestaurantsByUserService } from "../../services/restaurant/retrieveRestaurantsByUser.service";

export const retrieveRestaurantsByUserController = async (req: Request, res: Response) => {
	const restaurants = await retrieveRestaurantsByUserService(req.params.id);
	return res.status(200).json(restaurants);
};
