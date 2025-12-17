import express from "express";
import * as userController from "../controllers/userController.js";
import { validateBody } from "../middlewares/validator.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", validateBody, userController.createUser);

export default router;
