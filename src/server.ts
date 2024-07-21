import express from "express";
import cors from "cors";
import router from "./routes";
import connectDB from "./config/db";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
  })
);

app.use("/", router);

app.listen(port, () => console.log("Server is running on port " + port));
