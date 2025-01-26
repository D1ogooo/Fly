const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.post("/auth/signin", UsersController.SignIn);
router.post("/auth/signup", UsersController.SignUp);

module.exports = router;
