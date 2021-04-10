const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./user");
const { Passport } = require("passport");
const app = express();

mongoose.connect("mongodb+srv://jackr353:jackr353@project-3-cluster-jack.w6g2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Mongoose Is Connected!")
}

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(
    cors({
    origin: "http://localhost:3000", // <-- location of the react app
    credentials: true
}))
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
}))

app.use(cookieParser("secretcode"))
// initialize passport and passport session
app.use(passport.initialize());
app.use(passport.session());
// require this file and pass passport as a param
require('./passportConfig')(passport);

// END OF MIDDLEWARE ^


// Routes
app.post('/login', (req, res, next) => {
    console.log(req.body);
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated!!");
                console.log(req.user);
            })
        }
    })(req, res, next);
});
app.post('/register', (req, res) => {
    console.log(req.body);
    User.findOne({username: req.body.username}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("USER ALREADY EXISTS");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created!");
        }
    })
});
app.get('/user', (req, res) => { //once authenticated, the User is Stored in the req.user
    // the req object you get from the client now has a user object inside of it
    // the object contains all of the session data
    // the object can be used and called at anytime, anywehere in the app
    res.send(req.user)
})

app.listen(4000, () => {
    console.log("SERVER HAS STARTED!");
})