//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const quoteRoutes = require("../routes/quotesRoute");
//express app
const app = express();

//local port
const port = process.env.PORT;
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//route handler
app.use("/api/quotes", quoteRoutes);

//connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests
		app.listen(port, () => console.log(`Testing weCode: ${port}!`));
	})
	.catch((error) => {
		console.log(error);
	});
