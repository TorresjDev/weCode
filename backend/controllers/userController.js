const mongoose = require("mongoose");

const loginUser = async (req, res) => {
	res.json({ msg: "login" });
};

const signUpUser = async (req, res) => {
	res.json({ msg: "register" });
};

module.exports = { loginUser, signUpUser };
