const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		dateOfBirth: {
			type: Date,
			required: true
		},
		placeOfBirth: {
			city: String,
			state: String,
			country: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		friends: {
			type: [mongoose.SchemaTypes.ObjectId],
			required: false
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
