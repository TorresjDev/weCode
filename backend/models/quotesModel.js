const mongoose = require("mongoose");

//used to define structure and schema of MongoDB document
const Schema = mongoose.Schema;

// schema for "Quote" collection
const quoteSchema = new Schema(
	{
		quote: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		rating: {
			type: Number,
			required: false
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
