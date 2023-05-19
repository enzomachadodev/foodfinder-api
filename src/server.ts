import express from "express";
import cors from "cors";
import { handleError } from "./errors/handleError";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/session", sessionRoutes);
app.use("/users", userRoutes);

app.use(handleError);

app.listen(3333, () => {
	console.log("Listening on port 3333");
});
