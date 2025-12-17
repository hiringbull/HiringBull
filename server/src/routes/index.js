import express from "express";
import healthRouter from "./health.js";
import userRouter from "./users.js";

const router = express.Router();

router.use("/health", healthRouter);
router.use("/users", userRouter);

export default router;
