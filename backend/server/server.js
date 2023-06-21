require("dotenv").config();
const express = require("express");

//express app
const app = express();

//local port
const port = process.env.PORT;

//route handler
app.get("/", (req, res) => res.json({ msg: "Hello World!2.o" }));

//listen for requests
app.listen(port, () => console.log(`Testing weCode: ${port}!`));
