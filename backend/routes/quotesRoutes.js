const express = require("express");

const {
	createQuote,
	getQuotes,
	paginateQuotes,
	searchQuotes,
	getQuoteById,
	updateQuote,
	deleteQuote
} = require("../controllers/quoteController");

//needed for route handlers
const router = express.Router();

//routes
router.post("/", createQuote);

router.get("/", getQuotes);

router.get("/paginate", paginateQuotes);

router.get("/search", searchQuotes);

router.get("/:id", getQuoteById);

router.patch("/:id", updateQuote);

router.put("/:id", updateQuote);

router.delete("/:id", deleteQuote);

module.exports = router;
