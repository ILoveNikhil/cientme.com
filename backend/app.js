import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
// import bodyParser from "body-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// app
export const app = express();

// config
config({ path: "./config/.env" });

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());

// Using Routes
app.use("/api/v1/user", userRouter);

// Middleware for Errors
app.use(errorMiddleware);
