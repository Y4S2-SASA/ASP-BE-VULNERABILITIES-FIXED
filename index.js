import "dotenv/config";
import express from "express";
import cors from "cors";
import {connect} from './utils/dbConnect.js';
import apiRouter from './routes/index.js';

import chalk from "chalk";

const portCon = chalk.bold.red;

const App = express();
App.use(express.json());
App.use(cors({origin: '*'}));

connect();

App.use("/api", apiRouter);

App.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 3001;
App.listen(port, console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)));

export default App;