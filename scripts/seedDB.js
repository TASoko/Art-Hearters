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
    date: new Date(Date.now()),
    aws_image_url: "https://wjr-bucket-1.s3.us-east-2.amazonaws.com/thokos-brewhouse.jpeg"
  },
  {
    user: "USER",
    team: "Vincent's",
    location: "Downtown",
    position: "Bartender",
    description: "In need of an experienced bartender with a creative approach to the job. Come ready to experiment with cocktail recipes. Must perform under pressure and scrutiny from our long-time returning clients. Vincent’s is dedicated to providing exceptional service and we expect the highest degree of dedication from our bartenders. ",
    from: "FROM",
    to: "TO",
    date: new Date(Date.now()),
    aws_image_url:"https://wjr-bucket-1.s3.us-east-2.amazonaws.com/vincents.jpeg"
  },
  {
    user: "USER",
    team: "Fat Cat Flowers",
    location: "Lower East Side",
    position: "Arranger",
    description: "Looking for a talented and passionate flower arranger with 5+ years of experience. Our small team of dedicated florists needs one more to join the ranks. Serious applicants will be ready to engage in a work culture of honest feedback and grit. No softies. Experience in bouquets is a plus.",
    from: "FROM",
    to: "TO",
    date: new Date(Date.now()),
    aws_image_url:"https://wjr-bucket-1.s3.us-east-2.amazonaws.com/fat-cat-flowers.jpeg"
  },
  {
    user: "USER",
    team: "Jack's Tape Dispensary",
    location: "Brooklyn",
    position: "Sales Representative",
    description: "Do you have a passion for adhesives? If so, apply today! Become a sales representative at Jack’s Tape Dispensary. Duct, painter’s, double-sided, scotch, masking, electrical--we have it all! Join our team as someone who is passionate about getting the right thing to stick. We also keep an expansive stock of clips, bands, and glues. ",
    from: "FROM",
    to: "TO",
    date: new Date(Date.now()),
    aws_image_url:"https://wjr-bucket-1.s3.us-east-2.amazonaws.com/jacks-tape-dispensary.jpeg"
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
