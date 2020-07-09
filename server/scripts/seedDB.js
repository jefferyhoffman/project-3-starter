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
<<<<<<< HEAD
        story: "Mr.Coder Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "It is said that Mr. Coder is the best front end engineer in all of the land, teaching hundreds of people from all walks of life how to code."
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture: "../../../assets/images/theLumberjack.png",
        name: "The Lumberjack",
        hairColor: "blue",
        glasses: false,
        facialHair: true ,
        eyeColor: "blue",
        fact: "has a degree in forestry.",
<<<<<<< HEAD
        story: "The Lumberjack Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "The Lumberjack is known to be one of the fastest bikers in town, his love for nature, and technology are on par with none."
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture: "../../../assets/images/karen.png",
        name: "Karen",
        hairColor: "red",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "has an unnecessarily large SUV to take her kids to soccer practice and be a menace on the road.",
<<<<<<< HEAD
        story: "Karen Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "Karen can often be seen asking for your manager in any type of situation that may or may not be out of your hands"
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture: "../../../assets/images/frank.png",
        name: "Frank The Tank",
        hairColor: "gray",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "Found 10 grand in a couch.",
<<<<<<< HEAD
        story: "Frank Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "Frank is a beer master, he has brewed some award winning beers locally, and is an absolute machine on the dance floor."
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture: "../../../assets/images/egirl.png",
        name: "egirl",
        hairColor: "purple",
        glasses: false,
        facialHair: false ,
        eyeColor: "green",
        fact: "loves playing and streaming video games",
<<<<<<< HEAD
        story: "egirl Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "The e-girl is known for her above average video game playing skills, and looks. She can often be found on her stream"
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture: "../../../assets/images/instagram-model.png",
        name: "instagram-model",
        hairColor: "black",
        glasses: true,
        facialHair: false ,
        eyeColor: "hazel",
        fact: "absolutely adores loves the way they look, always on the phone",
<<<<<<< HEAD
        story: "instagram Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
=======
        story: "The instagram model is always seeking that opportunity to take a picture showing all of her followers her lifestyle"
>>>>>>> 5787dfc2ea1be5703f4e047e6125f28e5bfaa68e
    },
    {
        picture:"../../../assets/images/johnOliver.png",
        name: "John Oliver",
        hairColor:"black",
        glasses: true,
        facialHair: false,
        eyeColor: "brown",
        fact: "Hosts 'Last Week Tonight'",
        story: " John Oliver Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
    },
    {
        picture:"../../../assets/images/trevorNoah.png",
        name: "Trevor Noah",
        hairColor:"black",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM",
        story: "You know him, hes witty, funny, and is the know all comedy central guy."
    },
    {
        picture:"../../../assets/images/jameela.png",
        name: "Jameela Jamil",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Wore a chicken suit for 16 days",
        story: "Has accomplished much in her short carrer, and has been featured in several tv shows and movies."
    },
    {
        picture:"../../../assets/images/deadpool.png",
        name: "Ryan Reynolds",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "Was kicked out of school for stealing a car as an April Fool's joke",
        story: "from Deadpool, to kids movies, Ryan Rynolds is one of the most versitile actors in Hollywood. "
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
    {
        picture:"../../../assets/images/andrew.png",
        name:"Andrew",
        hairColor:"Brown",
        glasses:false,
        facialHair:false,
        eyeColor:"blue",
        fact:"I have been a sponsored extreme sports athlete",
        story:"Andrew has been working on his technology skills most of the time. Hobbies include playing video games, and playing/ writing music."
    }, 
    {
        picture:"../../../assets/images/George.png",
        name: "George",
        hairColor:"Black",
        glasses: true,
        facialHair: false,
        eyeColor: "brown",
        fact: "Worked as a tire technician for about 7 years",
        story:"Studied in Computer Science for about 5 years and really into gaming."
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