const mongoose = require("mongoose"); //required to interact with MongoDB

//used to define structure and schema of MongoDB document
const Schema = mongoose.Schema;

//quoteSchema represents the schema for the "Quote" collection in MongoDB
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
	{ timestamps: true } //adds two additional fields to the schema createdAt & updatedAt
);

//creates a model based on the schema for the "Quote" collection in MongoDB
module.exports = mongoose.model("Quote", quoteSchema);
