require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const quoteRoutes = require("../routes/quotesRoute");
//express app
const app = express();
const cors = require("cors");

//local port
const port = process.env.PORT;
const origin = process.env.REACT_ORIGIN_REQUEST;
app.use(
	cors({
		origin: origin
	})
);
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method, res);
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
	.catch((e) => {
		console.error(e);
	});
