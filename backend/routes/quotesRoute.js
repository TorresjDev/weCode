//
const express = require("express");
const QuoteModel = require("../models/quotesModel");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({ msg: "GET ALL QUOTES REQUEST" });
});

router.get("/:id", (req, res) => {
	res.json({ msg: "GET QUOTE BY ID REQUEST" });
});

router.post("/new", async (req, res) => {
	const { quote, author, rating } = req.body;

	try {
		const quotePost = await QuoteModel.create({ quote, author, rating });
		res.status(200).json(quotePost);
	} catch (e) {
		res.status.json({ error: e.message });
	}
});

router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE QUOTE BY ID REQUEST" });
});

router.patch("/:id", (req, res) => {
	res.json({ msg: "UPDATE QUOTE BY ID REQUEST" });
});

module.exports = router;
