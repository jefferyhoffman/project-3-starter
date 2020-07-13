const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/ProjectThree"
)

const characterSeed = [
    {
        picture: "/mrCoder.png",
        name: "Mr. Coder",
        hairColor: "brown",
        glasses: true,
        facialHair: true ,
        eyeColor: "brown",
        fact: "Studied Hypnotism, dont let him snap around you!",
        story: "I am the best front end engineer in all of the land, teaching hundreds of people from all walks of life how to code. I Studied Hypnotism, dont let him snap around you! I am an excellent poker player. "
    },
    {
        picture: "/theLumberjack.png",
        name: "The Lumberjack",
        hairColor: "blue",
        glasses: false,
        facialHair: true ,
        eyeColor: "blue",
        fact: "has a degree in forestry.",
        story: "The Lumberjack has a degree in forestry and is known to be one of the fastest bikers in town, his love for nature, and technology are on par with none."
    },
    {
        picture: "/karen.png",
        name: "Karen",
        hairColor: "red",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "has an unnecessarily large SUV to take her kids to soccer practice and be a menace on the road.",
        story: "I can often be seen asking for your manager in any type of situation that may or may not be out of your hands. I also drive an unnecessarily large SUV."
    },
    {
        picture: "/frank.png",
        name: "Frank The Tank",
        hairColor: "gray",
        glasses: false,
        facialHair: false ,
        eyeColor: "blue",
        fact: "Found 10 grand in a couch.",
        story: "I am a beer master,and have brewed some award winning beers locally.I Found 10 grand in a couch, and am absolute machine on the dance floor. "
    },
    {
        picture: "/egirl.png",
        name: "egirl",
        hairColor: "purple",
        glasses: false,
        facialHair: false ,
        eyeColor: "green",
        fact: "loves playing and streaming video games",
        story: "I amis known for my above average video game playing skills, and good looks.I can often be found on my/ other peoples streams."
    },
    {
        picture: "/instagram-model.png",
        name: "IG Model",
        hairColor: "black",
        glasses: true,
        facialHair: false ,
        eyeColor: "hazel",
        fact: "absolutely adores loves the way they look, always on the phone.",
        story: "I am always seeking that opportunity to take a picture showing all of her followers her lifestyle and is always on the phone."
    },
    {
        picture:"/johnOliver.png",
        name: "John Oliver",
        hairColor:"black",
        glasses: true,
        facialHair: false,
        eyeColor: "brown",
        fact: "Hosts 'Last Week Tonight'",
        story: " John Oliver Quark or quarg is a type of fresh dairy product made by warming soured milk until the desired amount of curdling is met, and then straining it. It can be classified as fresh acid-set cheese. Traditional quark can be made without rennet, but in modern dairies small quantities of rennet are typically added."
    },
    {
        picture:"/trevorNoah.png",
        name: "Trevor Noah",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM",
        story: "I am witty, funny, and am the comedy central guy.I began hosting his own radio show Noah’s Ark on Gauteng’s leading youth radio station, YFM."
    },
    {
        picture:"/jameela.png",
        name: "Jameela Jamil",
        hairColor:"black",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Wore a chicken suit for 16 days",
        story: "I have accomplished much in my short carrer, and have been featured in several tv shows and movies. I also wore a chicken suit for 16 days."
    },
    {
        picture:"/deadpool.png",
        name: "Ryan Reynolds",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "Was kicked out of school for stealing a car as an April Fool's joke",
        story: "from Deadpool, to kids movies, I am one of the most versatile actors in Hollywood.I Was kicked out of school for stealing a car as an April Fool's joke. "
    },
    {
        picture:"/Jake.png",
        name:"Jake",
        hairColor:"brown",
        glasses:false,
        facialHair:true,
        eyeColor:"brown",
        fact:"I own a heavy grade sparring stunt light saber.. no it doesn't make noise",
        story:"Love all things nerdy Star wars especially I got into stunt light saber fighting to get into shape one new year, and I've made my own saiyan armor for a convention."
    },
    {
        picture:"/kenzie.png",
        name:"Kenzie",
        hairColor:"brown",
        glasses:false,
        facialHair:false,
        eyeColor:"brown",
        fact:"Could eat pizza three times a day",
        story:"Obsessed with NY Pizza and would eat it three times a day. Mini coopers > Mini Vans.  "
    },
    {
        picture:"/newYorker.png",
        name:"Lindsey",
        hairColor:"blonde",
        glasses:true,
        facialHair:false,
        eyeColor:"blue",
        fact:"Drove without a valid drivers license for a few years",
        story:"I didn't want a drivers license but loved to drive. I use google during trivia and always find a way to bend the rules. "
    },
    {
        picture:"/theHiker.png",
        name:"Rescue Hiker",
        hairColor:"brown",
        glasses:true,
        facialHair:true,
        eyeColor:"brown",
        fact:"Hiked the Appalachian Trail",
        story:"Worked as an EMT for 4 years. Hiking is a must especially since I hiked the Appalacian Trail."
    },
     {   picture:"/andrew.png",
        name:"Andrew",
        hairColor:"brown",
        glasses:false,
        facialHair:false,
        eyeColor:"blue",
        fact:"I have been a sponsored extreme sports athlete",
        story:"I have been working on my technology skills most of the time. I have been a sponsored extreme sports athlete. My hobbies include playing video games, and playing/ writing music."
        
    }, 
    {
        picture:"/George.png",
        name: "George",
        hairColor:"black",
        glasses: true,
        facialHair: true,
        eyeColor: "brown",
        fact: "Worked as a tire technician for about 7 years",
        story:"Studied in Computer Science for about 5 years and really into gaming."
    },
    {
        picture:"/grayson.png",
        name: "Grayson",
        hairColor:"brown",
        glasses: false,
        facialHair: true,
        eyeColor: "hazel",
        fact: "Half Native American with roots from the Lumbee Tribe in North Carolina",
        story:"I'm half Native American with roots from the Lumbee Tribe in North Carolina. And I have a half brother."
    },
    {
        picture:"/josh.png",
        name: "Josh",
        hairColor:"black",
        glasses: false,
        facialHair: true,
        eyeColor: "brown",
        fact: "Was into BMX racing for 10 years",
        story:"I love my Husky and used to do BMX racing for 10 years."
    },
    {
        picture:"/travis.png",
        name: "Travis",
        hairColor:"black",
        glasses: false,
        facialHair: true,
        eyeColor: "blue",
        fact: "Have a cousin who won 7 NBA titles with the Celtics in the 60s and 70s",
        story:"I'm an explorer. I backpacked through New Zealand. Not to brag (sorry not sorry) but I have a cousin who won 7 NBA titles for the Celtics in the 60s & 70s."
    },
    {
        picture:"/patrick.png",
        name: "Pat",
        hairColor:"brown",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Rescued 46 Cats",
        story:"I believe in helping people and animals. I saved a woman's life at a food lion. I also rescued 46 cats & placed them into loving homes."
    },
    {
        picture:"/britany.png",
        name: "Britany",
        hairColor:"blonde",
        glasses: false,
        facialHair: false,
        eyeColor: "grey",
        fact: "Can write backwards on a window and person on otherside can read it normally",
        story:"I have perfected writing backwards on a window where a person can read it normally on opposite side."
    },
    {
        picture:"/bart.png",
        name: "Bart",
        hairColor:"brown",
        glasses: true,
        facialHair: false,
        eyeColor: "brown",
        fact: "Filmed an episode of Broad City",
        story:"I've climbed trees in the amazon for work. Took photos of Christina Aguilar in her younger years and a few years ago filmed an episode of Broad City."
    },
    {
        picture:"/Stephanie.png",
        name: "Stephanie",
        hairColor:"brown",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Not a fan of Clowns",
        story:"Clowns are the worse. If you are into clowns stay far from me. I like living in different cities- I'm on city #7 currently."
    },
    {
        picture:"/lola.png",
        name: "Lola",
        hairColor:"brown",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Published a poetry book",
        story:"I attended a math and science boarding school. I've also published a poetry book. Poetry Rules!"
    },
    {
        picture:"/knives.png",
        name: "Ms Knives",
        hairColor:"brown",
        glasses: false,
        facialHair: false,
        eyeColor: "brown",
        fact: "Had a professional troupe act out how awkardly I eat ice cream",
        story:"My name Ms Knives comes from college. I'm an icecream lover who had a professional comedy troupe act out how I awkardly eat icecream. My cat is a one-eyed pirate with colourful nails!"
    },
    {
        picture:"/seth.png",
        name: "Seth",
        hairColor:"brown",
        glasses: false,
        facialHair: false,
        eyeColor: "green",
        fact: "Was neighbors with Michael J. Fox in Vermont",
        story:"My neighbor Michael J. Fox was pretty chill and never complained when I played death metal with my guitar."
    },
    {
        picture:"/emily.png",
        name: "Emily",
        hairColor:"blonde",
        glasses: false,
        facialHair: false,
        eyeColor: "blue",
        fact: "Was in the Colorguard during High School",
        story:"Looking forward to travelling to Peru to hike Machu Picchu to check it off my bucket list. I was in the colorguard during High School."
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