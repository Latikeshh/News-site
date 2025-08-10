const express = require("express")
// Loads the express module into your project
// Express is a minimal web framework for building APIs and web servers in Node.js

const app = express()
// Creates an instance of the Express application
// app will be used to define routes, middleware, and start the server

app.use(express.json())
// Enable Express to parse incoming requests with JSON payloads
//usefull for api that accept data in the request body

const mongoose = require("mongoose")
//load the mongoose library , ehich provides a schema-based solution to mode mongodb
// data in node.js
mongoose.connect("mongodb://localhost:27017/News")
    .then(() => console.log("Connected 2 mongodb"))
    .catch((err) => console.log(err))
//
//
app.get("/", (req, res) => {
    res.send("localhost 8000");
})

const cors = require("cors");
//cross origin resource sharing
app.use(cors());

app.get("/", (req, res) => {
    res.send("Running on localhost 8000");
});

const route = require("./route");

app.use("/", route);

app.listen(8000, () => {
    console.log("Running on localhost 8000");
});
