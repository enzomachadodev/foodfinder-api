import { Request, Response } from "express";
import { UpdateRestaurantService } from "../../services/restaurant/updateRestaurant.service";

export const updateRestaurantController = async (req: Request, res: Response) => {
	const restaurant = await UpdateRestaurantService(req.params.id, req.body);
	return res.status(200).json(restaurant);
};
