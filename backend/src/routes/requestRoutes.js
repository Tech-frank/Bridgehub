import express from "express";
import { handleServiceRequest } from "../controllers/requestController.js";

const router = express.Router();

router.post("/", handleServiceRequest);

export default router;
