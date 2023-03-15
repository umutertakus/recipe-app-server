import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

app.use("/auth", userRouter);

mongoose.connect(
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@recipes.g8yqers.mongodb.net/recipes?retryWrites=true&w=majority`
);

app.listen(3300, () => console.log("Server started."));
