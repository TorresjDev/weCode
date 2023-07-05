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
	try {
		const existingQuote = await QuoteModel.findOne({ quote });

		if (existingQuote) {
			return res.status(409).json({
				error: "Quote already exists" 
			});
		}
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

const paginateQuotes = async (req, res) => {
	try {
		const pageIndex = parseInt(req.query.pageIndex) || 0; // Extract pageIndex from query params (default to 0 if not provided)
		const pageSize = parseInt(req.query.pageSize) || 10; // Extract pageSize from query params (default to 10 if not provided)

		const quotes = await QuoteModel.find()
			.skip(pageIndex * pageSize)
			.limit(pageSize);

		const totalQuotes = await QuoteModel.countDocuments(quotes);
		res.json({ item: { pageIndex, pageSize, pageItems: quotes, totalCount: totalQuotes } });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

const searchQuotes = async (req, res) => {
	try {
		const pageIndex = parseInt(req.query.pageIndex) || 0;
		const pageSize = parseInt(req.query.pageSize) || 3;
		const keyword = req.query.keyword || "";

		const query = {};

		if (keyword) {
			query.$or = [
				{ text: { $regex: keyword, $options: "i" } }, // Case-insensitive search by 'text' field
				{ author: { $regex: keyword, $options: "i" } } // Case-insensitive search by 'author' field
			];
		}
		const totalQuotes = await QuoteModel.countDocuments(query);

		const quotes = await QuoteModel.find(query)
			.skip(pageIndex * pageSize)
			.limit(pageSize);

		res.json({ item: { pageIndex, pageSize, pageItems: quotes, totalCount: totalQuotes } });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
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

module.exports = { createQuote, getQuotes, paginateQuotes, searchQuotes, getQuoteById, updateQuote, deleteQuote };
