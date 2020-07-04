const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://ProjectThree"
)

const characterSeed = [
    {
        picture: "",
        name: "Mr. Coder",
        hairColor: "brown",
        glasses: true,
        facialHair: true ,
        eyeColor: "true",
    }
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