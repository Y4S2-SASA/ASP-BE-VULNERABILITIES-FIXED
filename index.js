require("dotenv").config();
const express = require("express");
const App = express();
const cors = require("cors");
const Connection = require("./db");
const chalk = require("chalk");

//just a console style. :(
const portCon = chalk.bold.red;

// database connection
// Connection();

// middlewares
App.use(express.json());
App.use(cors());

// routes

const port = process.env.PORT || 3001;
App.listen(port, console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)));