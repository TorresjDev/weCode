const express = require("express");

const { createQuote, getQuotes, getQuoteById, updateQuote, deleteQuote } = require("../controllers/quoteController");

//needed for route handlers
const router = express.Router();

//routes
router.get("/", getQuotes);

router.get("/:id", getQuoteById);

router.post("/new", createQuote);

router.delete("/:id", deleteQuote);

router.patch("/:id", updateQuote);

module.exports = router;
