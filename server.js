// const connectDB = require('./backend/config/db');
const express = require("express");
const mongoose = require("mongoose");
// const app = require("./app");
require('dotenv').config(); // Loading dotenv to have access to env variables for amazon s3 upload
const fileUpload = require('express-fileupload') // getting express-fileupload for image upload
const app = express();

// connect to mongo db
// connectDB();

const PORT = process.env.PORT || 5000;


// used for image upload to amazon s3
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
}))


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

app.use(express.json());

app.get('/', (req, res) => res.send("API Running"));


// define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/assets', require('./routes/api/amazon-s3-routes'))

// Start the server
app.listen(PORT, () => console.log(`Server started at ${PORT}`));