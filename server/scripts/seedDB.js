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
    {
        picture: "../client/public/assets/images/egirl.png",
        name: "egirl",
        hairColor: "purple",
        glasses: false,
        facialHair: false ,
        eyeColor: "green",
        fact: "loves playing and streaming video games"
    },
    {
        picture: "../client/public/assets/images/instagram-model.png",
        name: "instagram-model",
        hairColor: "black",
        glasses: true,
        facialHair: false ,
        eyeColor: "hazel",
        fact: "absolutely adores loves the way they look, always on the phone"
    },
    {
        picture:"../client/public/assets/images/johnOliver.png",
        name: "John Oliver",
        hairColor:"black",
        glasses: true,
        facialHair: false,
        eyecolor: "brown",
        fact: "Hosts 'Last Week Tonight'"
    },
    {
        picture:"../client/public/assets/images/trevorNoah.png",
        name: "Trevor Noah",
        hairColor:"black",
        glasses: false,
        facialHair: true,
        eyecolor: "brown",
        fact: "began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM"
    },
    {
        picture:"../client/public/assets/images/jameela.png",
        name: "Jameela Jamil",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyecolor: "brown",
        fact: "Wore a chicken suit for 16 days"
    },
    {
        picture:"../client/public/assets/images/deadpool.png",
        name: "Ryan Reynolds",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyecolor: "brown",
        fact: "Was kicked out of school for stealing a car as an April Fool's joke"
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