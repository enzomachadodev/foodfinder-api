import { Request, Response } from "express";
import { deleteRestaurantService } from "../../services/restaurant/deleteRestaurant.service";

export const deleteRestaurantController = async (req: Request, res: Response) => {
	const restaurant = await deleteRestaurantService(req.params.id);
	return res.status(204).json(restaurant);
};
