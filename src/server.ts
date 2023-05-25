import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { handleError } from "./errors/handleError";

import swaggerDocument from "../swagger.json";

import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import categoryRoutes from "./routes/category.routes";
import restaurantRoutes from "./routes/restaurant.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/session", sessionRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(handleError);

app.get("/", (req, res) => {
	res.json({ message: "Server is up" });
});

app.listen(3333, () => {
	console.log("Server is running on port 3333");
});
