
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
const expressSession = require("express-session");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
