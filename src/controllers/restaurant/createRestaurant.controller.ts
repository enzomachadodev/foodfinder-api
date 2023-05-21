import { Request, Response } from "express";
import { createRestaurantService } from "../../services/restaurant/createRestaurant.service";

export const createRestaurantController = async (req: Request, res: Response) => {
	const restaurant = await createRestaurantService(req.user.id, req.body);
	return res.status(201).json(restaurant);
};
