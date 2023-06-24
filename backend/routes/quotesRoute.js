const express = require("express");

const { createQuote, getQuotes, getQuoteById, updateQuote, deleteQuote } = require("../controllers/quoteController");

//needed for route handlers
const router = express.Router();

//routes
router.post("/", createQuote);

router.get("/", getQuotes);

router.get("/:id", getQuoteById);

router.patch("/:id", updateQuote);

router.delete("/:id", deleteQuote);

module.exports = router;
