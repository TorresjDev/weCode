require("dotenv").config(); // Load environment variables from a .env file

const express = require("express");
const mongoose = require("mongoose");

const quoteRoutes = require("../routes/quotesRoute");

const port = process.env.PORT;

// Create an instance of the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for the app
const cors = require("cors");
const origin = process.env.REACT_ORIGIN_REQUEST;
app.use(
	cors({
		origin: origin
	})
);

app.use(express.json()); // Parse JSON request bodies

// Log request path, HTTP method, and response
app.use((req, res, next) => {
	console.log(req.path, req.method, res);
	next();
});

// route handler for the "/api/quotes" path
app.use("/api/quotes", quoteRoutes);

// Connect to the MongoDB database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Start the Express app and listen for incoming requests
		app.listen(port, () => console.log(`Testing weCode: ${port}!`));
	})
	.catch((e) => {
		console.error(e);
	});
