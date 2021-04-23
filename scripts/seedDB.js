const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const jobSeed = [
  {
    user: "USER",
    team: "Thoko's Brewhouse",
    location:
      "Midtown",
    position: "Team Manager",
    description: "In search of a competent team manager who can handle a rush. Looking for a dedicated go-getter who is punctual and detail-oriented. 3+ years in restaurant management preferred.",
    from: "FROM",
    to: "TO",
    date: new Date(Date.now())
  },
  {
    user: "USER",
    team: "Vincent's",
    location: "Downtown",
    position: "Bartender",
    description: "In need of an experienced bartender with a creative approach to the job. Come ready to experiment with cocktail recipes. Must perform under pressure and scrutiny from our long-time returning clients. Vincent’s is dedicated to providing exceptional service and we expect the highest degree of dedication from our bartenders. ",
    from: "FROM",
    to: "TO",
    date: new Date(Date.now())
  },
  {
    title: "Another One",
    author: "admin",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
