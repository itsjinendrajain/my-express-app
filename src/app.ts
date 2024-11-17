import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import logger from "./middlewares/logger";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use("/api", routes);

export default app;
