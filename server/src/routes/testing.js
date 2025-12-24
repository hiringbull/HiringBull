import express from "express";
import { requireAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/testing", (req, res) => {
  res.send("Testing API endpoint is working!");
});

router.get("/auth-test", requireAuth, (req, res) => {
  res.status(200).json({
    message: "Kabeer Auth testing working",
    userId: req.auth().userId,
  });
});

export default router;
