const express = require('express')
const app = express()

// middleware

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send("API Running"));


// define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/projects', require('./routes/api/projects'));
// app.use('/api/event', require('./routes/api/event'));

module.exports = app;