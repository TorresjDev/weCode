const QuoteModel = require("../models/quotesModel");
const mongoose = require("mongoose");

const createQuote = async (req, res) => {
	const { quote, author, rating } = req.body;
	let emptyFieldInputs = [];

	if (!quote) {
		emptyFieldInputs.push("quote");
	}
	if (!author) {
		emptyFieldInputs.push("author");
	}

	if (emptyFieldInputs.length > 0) {
		return res.status(400).json({ error: "input for quote and author is required", emptyFieldInputs });
	}
	//adds doc to db
	try {
		const quotePost = await QuoteModel.create({ quote, author, rating });
		res.status(200).json(quotePost);
	} catch (e) {
		res.status.json({ error: e.message });
	}
};

const getQuotes = async (req, res) => {
	const quotes = await QuoteModel.find({}).sort({ createdAt: -1 });
	res.status(200).json(quotes);
};

const getQuoteById = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid id" });
	}
	const quote = await QuoteModel.findById(id);
	if (!quote) {
		return res.status(404).json({ error: "Quote not found" });
	}
	res.status(200).json(quote);
};

const updateQuote = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid id" });
	}

	const quote = await QuoteModel.findOneAndUpdate({ _id: id }, { ...req.body });
	if (!quote) {
		return res.status(400).json({ error: "Quote not found" });
	}
	res.status(200).json(quote);
};

const deleteQuote = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid id" });
	}
	const quote = await QuoteModel.findOneAndDelete({ _id: id });
	if (!quote) {
		return res.status(400).json({ error: "Quote not in database" });
	}
	res.status(200).json(quote);
};

module.exports = { createQuote, getQuotes, getQuoteById, updateQuote, deleteQuote };
