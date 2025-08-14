const express = require("express")

const app = express()

app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/News-site")
  .then(() => console.log("connected 2 mongodb"))
  .catch((err) => console.log(err))

// server upload images
app.use('/',express.static('Images'))

app.get('/', (req, res) => {
  res.send('localhost 8000')
})

const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
  res.send("running on localhost 8000")
})

const route = require('./Route/route')
app.use('/', route)

const registrationRoute = require('./Route/registration_route');
app.use('/registeration', registrationRoute);

// ✅ New category route
const categoryRoute = require('./Route/categoryRoutes');
app.use('/', categoryRoute);

// ✅ New category route
const breakingRoute = require('./Route/breakRoute');
app.use('/headline/', breakingRoute);

app.listen(8000, () => {
  console.log("running on localhost 8000");
})