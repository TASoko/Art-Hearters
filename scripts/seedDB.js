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

const projectSeed = [
    {
      user: "USER",
      project: "Chalk Rocks",
      location: "Central Park, South Side",
      description: "The Union of Concerned Sidewalk Artists needs your help. The rocks in our city’s core are too bare to bear! Spring and summer are on their way and it’s time for a makeover. Bring friends and family for an afternoon of chalk art that celebrates our city’s magnificent geology.",
      from: "FROM",
      to: "TO",
      date: new Date(Date.now()),
      aws_image_url: "https://wjr-bucket-1.s3.us-east-2.amazonaws.com/chalk-rocks.jpeg"
    },
    {
      user: "USER",
      project: "Take Back the Night",
      location: "The High Line",
      description: "Columbia University’s undergraduate club Women in Computer Science will be hosting a candlelit ceremony on the High Line in recognition of sexual assault victims on college campuses. Students and friends of the University are invited to attend and to give their support respectfully.",
      from: "FROM",
      to: "TO",
      date: new Date(Date.now()),
      aws_image_url: "https://wjr-bucket-1.s3.us-east-2.amazonaws.com/take-back-the-night.jpeg"
    },
    {
     user: "USER",
      project: "Flash Mob! Go Nuts! World Record Attempt!",
      location: "The 2",
      description: "Do you like to go nuts? The Squirrel Group is attempting to set a world record for Most Walnuts Crushed by Subway Railcar. Participants will be asked for walnut donations in exchange for free stickers and wristbands. Toasted or raw--any walnut will do!",
      from: "FROM",
      to: "TO",
      date: new Date(Date.now()),
      aws_image_url: "https://wjr-bucket-1.s3.us-east-2.amazonaws.com/flash-mob-go-nuts-world-record-attempt.jpeg"
    },
    {
      user: "USER",
      project: "Performance Artist Needs Volunteers",
      location: "86th and Broadway",
      description: "Renowned painter and performance artist VERONIKA is looking for the bold and fearless. More details disclosed upon further inquiry. NOTE: applicants must be unafraid of heights, sewers.",
      from: "FROM",
      to: "TO",
      date: new Date(Date.now()),
      aws_image_url: "https://wjr-bucket-1.s3.us-east-2.amazonaws.com/performance-artist-needs-volunteers.jpeg"
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
