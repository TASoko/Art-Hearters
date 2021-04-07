
//Go over to make sure everything matches//
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// jack's additions
const passport = require("passport")
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cookieParser = require("cookie-parser");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// guy on the internet says using cors here is the most CRITICAL aprt
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser("keyboard cat"));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// BASIC ROUTES HERE FOR PASSPORT TESTING

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/register", (req, res) => {
  console.log(req.body)
});

app.get("/user", (req, res) => {})

// // Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
