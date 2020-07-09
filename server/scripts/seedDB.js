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
        story: "I am the best front end engineer in all of the land, teaching hundreds of people from all walks of life how to code. I Studied Hypnotism, dont let him snap around you! I am an excellent poker player. "
    },
    {
        picture: "../../../assets/images/theLumberjack.png",
        name: "The Lumberjack",
        hairColor: "blue",
        glasses: false,
        facialHair: true ,
        eyeColor: "blue",
        fact: "has a degree in forestry.",
        story: "The Lumberjack has a degree in forestry and is known to be one of the fastest bikers in town, his love for nature, and technology are on par with none."
    },
    {
        picture: "../../../assets/images/karen.png",
        name: "Karen",
        hairColor: "red",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "has an unnecessarily large SUV to take her kids to soccer practice and be a menace on the road.",
        story: "I can often be seen asking for your manager in any type of situation that may or may not be out of your hands. I also drive an unnecessarily large SUV."
    },
    {
        picture: "../../../assets/images/frank.png",
        name: "Frank The Tank",
        hairColor: "gray",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "Found 10 grand in a couch.",
        story: "I am a beer master,and have brewed some award winning beers locally.I Found 10 grand in a couch, and am absolute machine on the dance floor. "
    },
    {
        picture: "../../../assets/images/egirl.png",
        name: "egirl",
        hairColor: "purple",
        glasses: false,
        facialHair: false ,
        eyeColor: "green",
        fact: "loves playing and streaming video games",
        story: "I amis known for my above average video game playing skills, and good looks.I can often be found on my/ other peoples streams."
    },
    {
        picture: "../../../assets/images/instagram-model.png",
        name: "instagram-model",
        hairColor: "black",
        glasses: true,
        facialHair: false ,
        eyeColor: "hazel",
        fact: "absolutely adores loves the way they look, always on the phone.",
        story: "I am always seeking that opportunity to take a picture showing all of her followers her lifestyle and is always on the phone."
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
        story: "I am witty, funny, and am the comedy central guy.I began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM."
    },
    {
        picture:"../../../assets/images/jameela.png",
        name: "Jameela Jamil",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Wore a chicken suit for 16 days",
        story: "I have accomplished much in my short carrer, and have been featured in several tv shows and movies. I also wore a chicken suit for 16 days."
    },
    {
        picture:"../../../assets/images/deadpool.png",
        name: "Ryan Reynolds",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "Was kicked out of school for stealing a car as an April Fool's joke",
        story: "from Deadpool, to kids movies, I am one of the most versatile actors in Hollywood.I Was kicked out of school for stealing a car as an April Fool's joke. "
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
        picture:"/newYorker.png",
        name:"Lindsey",
        hairColor:"blonde",
        glasses:false,
        facialHair:true,
        eyeColor:"blue",
        fact:"Drove without a valid drivers license from 2015-2019",
        story:""
    },
    {
        picture:"/theHiker.png",
        name:"Rescue Hiker",
        hairColor:"brown",
        glasses:false,
        facialHair:true,
        eyeColor:"brown",
        fact:"Hiked the Appalachian Trail",
        story:"Worked as an EMT for 4 years. Hiking is a must especially since I hiked the Appalacian Trail."
    },
     {   picture:"../../../assets/images/andrew.png",
        name:"Andrew",
        hairColor:"Brown",
        glasses:false,
        facialHair:false,
        eyeColor:"blue",
        fact:"I have been a sponsored extreme sports athlete",
        story:"I have been working on my technology skills most of the time. I have been a sponsored extreme sports athlete. My hobbies include playing video games, and playing/ writing music."
        
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