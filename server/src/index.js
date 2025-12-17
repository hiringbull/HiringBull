import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandlers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Global middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// Health check root
app.get("/", (req, res) => {
  res.send({ status: "ok", message: "HiringBull server is running" });
});

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`HiringBull server running on port ${PORT}`);
});
