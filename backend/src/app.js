import express from "express";
import cors from "cors";
import requestRoutes from "./routes/requestRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/request-service", requestRoutes);

app.use(errorHandler);

export default app;
