//
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ msg: "GET ALL QUOTES REQUEST" });
});

router.get("/:id", (req, res) => {
	res.json({ msg: "GET QUOTE BY ID REQUEST" });
});

router.post("/new", (req, res) => {
	res.json({ msg: "CREATE NEW QUOTE REQUEST" });
});

router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE QUOTE BY ID REQUEST" });
});

router.patch("/:id", (req, res) => {
	res.json({ msg: "UPDATE QUOTE BY ID REQUEST" });
});

module.exports = router;
