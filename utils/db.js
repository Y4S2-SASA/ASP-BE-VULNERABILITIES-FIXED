import mongoose from "mongoose";
import chalk from "mongoose";
const db = mongoose.connection;
import "dotenv/config";

const warning = chalk.bold.yellow;
const info = chalk.bold.blue;
const errorMsg = chalk.bold.red;
const success = chalk.bold.green;

module.exports = () => {
	const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
	try {
		mongoose.connect(process.env.MONGO_DB_URI, settings);
		db.on('connected', () => console.log(info('Connected to the database!')));
    	db.on('open', () =>console.log(success('DB connection successful!')));
	} catch (error) {
		console.log(error);
		db.on('error', (err) => console.log(errorMsg('DB connection failed!')));
    	db.on('diconnected', () => console.log(warning('Database disconnected!')));
	}
};