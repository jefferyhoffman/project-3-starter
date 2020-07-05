const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://ProjectThree"
)

const characterSeed = [
    {
        picture: "../client/public/assets/images/mrCoder.png",
        name: "Mr. Coder",
        hairColor: "brown",
        glasses: true,
        facialHair: true ,
        eyeColor: "brown",
        fact: "Studied Hypnotism, dont let him snap around you!"
    },
    {
        picture: "../client/public/assets/images/theLumberjack.png",
        name: "The Lumberjack",
        hairColor: "blue",
        glasses: false,
        facialHair: true ,
        eyeColor: "blue",
        fact: "has a degree in forestry."
    },
    {
        picture: "../client/public/assets/images/karen.png",
        name: "Karen",
        hairColor: "red",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "has an unnecessarily large SUV to take her kids to soccer practice and be a menace on the road."
    },
    {
        picture: "../client/public/assets/images/frank.png",
        name: "Frank The Tank",
        hairColor: "gray",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "Found 10 grand in a couch."
    },
];

db.Character.remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });