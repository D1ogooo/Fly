const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/auth");
const User = require("../models/UsersModel");
require("dotenv").config();

class UsersController {
	async SignIn(req, res) {
		try {
			const { email, password } = req.body;
			const userExist = await User.findOne({ email });

			if (!userExist) {
				return res.status(400).json({ error: "Usuário inexistente" });
			}

			if (!userExist.email) {
				return res.status(400).json({ error: "Email invalido" });
			}

			const validPassword = await bcrypt.compare(password, userExist.password);

			if (!validPassword) {
				return res.status(400).json({ error: "Senha inválida declarada" });
			}

			const token = jwt.sign({ id: userExist._id }, jwtConfig.expires);
			const user = await User.find({ email }).select("-password").exec();

			res.status(200).json({ token, user });
		} catch (error) {
			// res.status(500).json(error);
			return console.log(error);
		}
	}

	async SignUp(req, res) {
		try {
			const { image, name, email, password } = req.body;
			const verifyEmail = await User.findOne({ email });
			if (verifyEmail) {
				return res.status(400).json({ error: "Email já se encontra em uso" });
			}

			const declaredImage =
				(image === null) | (image === undefined)
					? "https://github.com/D1ogooo.png"
					: image;

			const encryptedPassword = await bcrypt.hash(password, 8);

			const newUser = new User({
				image: declaredImage,
				name,
				email,
				password: encryptedPassword,
			});

			await newUser.save();
			res.status(201).json({ sucesso: "Conta criada" });
		} catch (error) {
			// res.status(500).json(error);
			return console.log(error);
		}
	}
}

module.exports = new UsersController();
