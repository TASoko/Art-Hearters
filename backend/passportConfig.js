const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function(passport) {

    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err,user) => {
                if (err) throw err;
                // if no error, also no user --> bc trying to create a new one
                if (!user) return done(null,false)
                // compare entered pw w/ pw in the database
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        // null error, user is the use!
                        return done(null, user);
                    } else {
                        // null, password is not the same as the one in the db
                        return done(null, false);
                    }
                })
            })
        })
    )
        // serializeUser functions stores a cookie in the browser
        // take user we got from the local strategy and make a cookie with the id inside of it
    passport.serializeUser((user,cb) => {
        cb(null, user.id);
    })
    // takes the cookie, unravels it, and returns a user from it
    // find user in the db with the id that matches the cookie id
    passport.deserializeUser((id,cb) => {
        User.findOne({_id: id}, (err, user) => {
            const userInformation = {
                username: user.username // just include username so as to not log the password and other info
            }
            // if user found, return it!
            cb(err, userInformation);
        })
    })
}