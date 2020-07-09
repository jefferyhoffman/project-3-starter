const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/ProjectThree"
)

const characterSeed = [
    {
        picture: "../../../assets/images/mrCoder.png",
        name: "Mr. Coder",
        hairColor: "brown",
        glasses: true,
        facialHair: true ,
        eyeColor: "brown",
        fact: "Studied Hypnotism, dont let him snap around you!",
        story: ""
    },
    {
        picture: "../../../assets/images/theLumberjack.png",
        name: "The Lumberjack",
        hairColor: "blue",
        glasses: false,
        facialHair: true ,
        eyeColor: "blue",
        fact: "has a degree in forestry.",
        story: ""
    },
    {
        picture: "../../../assets/images/karen.png",
        name: "Karen",
        hairColor: "red",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "has an unnecessarily large SUV to take her kids to soccer practice and be a menace on the road.",
        story: ""
    },
    {
        picture: "../../../assets/images/frank.png",
        name: "Frank The Tank",
        hairColor: "gray",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "Found 10 grand in a couch.",
        story: ""
    },
    {
        picture: "../../../assets/images/egirl.png",
        name: "egirl",
        hairColor: "purple",
        glasses: false,
        facialHair: false ,
        eyeColor: "green",
        fact: "loves playing and streaming video games",
        story: ""
    },
    {
        picture: "../../../assets/images/instagram-model.png",
        name: "instagram-model",
        hairColor: "black",
        glasses: true,
        facialHair: false ,
        eyeColor: "hazel",
        fact: "absolutely adores loves the way they look, always on the phone",
        story: ""
    },
    {
        picture:"../../../assets/images/johnOliver.png",
        name: "John Oliver",
        hairColor:"black",
        glasses: true,
        facialHair: false,
        eyeColor: "brown",
        fact: "Hosts 'Last Week Tonight'",
        story: ""
    },
    {
        picture:"../../../assets/images/trevorNoah.png",
        name: "Trevor Noah",
        hairColor:"black",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM",
        story: ""
    },
    {
        picture:"../../../assets/images/jameela.png",
        name: "Jameela Jamil",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Wore a chicken suit for 16 days",
        story: ""
    },
    {
        picture:"../../../assets/images/deadpool.png",
        name: "Ryan Reynolds",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "Was kicked out of school for stealing a car as an April Fool's joke",
        story: ""
    },
    {
        picture:"../../../assets/images/Jake.png",
        name:"Jake",
        hairColor:"brown",
        glasses:false,
        facialHair:true,
        eyeColor:"brown",
        fact:"I've made my own Dragon Ball Z costume armor for a",
        story:""
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