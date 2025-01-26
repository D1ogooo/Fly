const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

async function DataBase() {
	try {
		const DBUSER = process.env.DB_USER;
		const DBPASSWORD = process.env.DB_PASSWORD;

		await mongoose
			.connect(
				`mongodb+srv://${DBUSER}:${DBPASSWORD}@fly.leqld.mongodb.net/?retryWrites=true&w=majority&appName=Fly`,
			)
			.then(() => {
				console.log("Database connected successfully");
			});
	} catch (error) {
		console.error("Database connection error:", error);
	}
}

module.exports = DataBase;
