// const connectDB = require('./backend/config/db');
const express = require('express');
const mongoose = require("mongoose");
const app = express();


// connect to mongo db
// connectDB();

const PORT = process.env.PORT || 5000

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/limitless-cliffs-88318",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the server
app.listen(PORT, () => console.log(`Server started at ${PORT}`))


// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
// );

// // Start the API server
// app.listen(PORT, function () {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });