import { Request, Response } from "express";
import { retrieveUniqueRestaurantService } from "../../services/restaurant/retrieveUniqueRestaurant.service";

export const retrieveUniqueRestaurantController = async (req: Request, res: Response) => {
	const restaurant = await retrieveUniqueRestaurantService(req.params.id);
	return res.status(200).json(restaurant);
};
