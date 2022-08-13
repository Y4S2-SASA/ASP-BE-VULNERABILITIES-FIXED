const mongoose = require("mongoose");
const chalk = require("chalk");
const db = mongoose.connection;
require('dotenv').config();

const warning = chalk.bold.yellow;
const info = chalk.bold.blue;
const error = chalk.bold.red;
const success = chalk.bold.green;

const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const database = process.env.MONGO_DB_URI;

db.on('error', (err) => console.log(error('DB connection failed!')));
db.on('connected', () => console.log(info('Connected to the database!')));
db.on('diconnected', () => console.log(warning('Database disconnected!')));
db.on('open', () =>console.log(success('DB connection successful!')));

mongoose.connect(database, settings);

module.exports = mongoose;

// const mongoose = require("mongoose");

// module.exports = () => {
// 	// const connectionParams = {
// 	// 	useNewUrlParser: true,
//     //     useCreateIndex: true,
// 	// };
// 	try {
// 		mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };