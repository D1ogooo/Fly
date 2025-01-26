const dotenv = require("dotenv");
dotenv.config();

jwtConfig = {
	secret: process.env.SECRET_JWT,
	expires: "1d",
};

module.exports = jwtConfig;
