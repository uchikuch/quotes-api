// Import Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// Import Routes
const quoteRoutes = require("./routes/quoteRoutes");

// Initialise App
const app = express();
app.use(morgan("dev"));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("Access-Control-Allow-Origin", null);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "50mb" }));

// Environment Variables
const port = process.env.PORT;
const dbURI = process.env.mongoURI;

// Database Connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("MongoDB Connected");
    app.listen(port);
    console.log(`Server listening on port ${port}`);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello Quotes App - 10-12-2021");
});

// Use Routes
app.use(quoteRoutes);
