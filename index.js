import "dotenv/config";
import express from "express";

const App = express();
const cors = require("cors");

import { Connection } from "./utils/db";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";

import chalk from "chalk";

//just a console style. :(
const portCon = chalk.bold.red;

// database connection
Connection();

// middlewares
App.use(express.json());
App.use(cors({origin: '*'}));

// routes
App.use("/register", userRouter);
App.use("/login", authRouter);

const port = process.env.PORT || 3001;
App.listen(port, console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)));