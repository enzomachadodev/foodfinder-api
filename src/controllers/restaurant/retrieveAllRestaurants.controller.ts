import { Request, Response } from "express";
import { retrieveAllRestaurantsService } from "../../services/restaurant/retrieveAllRestaurants.service";

export const retrieveAllRestaurantsController = async (req: Request, res: Response) => {
	const restaurants = await retrieveAllRestaurantsService();
	return res.status(200).json(restaurants);
};
