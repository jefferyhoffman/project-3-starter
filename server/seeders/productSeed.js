let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/saint-george", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const productSeed = [
    {
        name: "Flow Y Longline Bra",
        description: "Feels like nothing at all. Powered by buttery-soft fabric, this long-line yoga bra has minimal seams to help keep your mind on the moment.",
        price: 19.99,
        category: ["Sports-Bras"],
        inventory: [
            {
                quantity: 25,
                size: "2",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "4",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "6",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "8",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "2",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "4",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "6",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "8",
                color: "Black",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "lulu.jpeg"
    },
    {
        name: "Like a Cloud Bra Light Support",
        description: "This yoga bra’s made with marshmallowy-soft foam cups and supple fabric to keep you comfortable during your practice—but we won’t be surprised if you wear it all day.",
        price: 19.99,
        category: ["Sports-Bras"],
        inventory: [
            {
                quantity: 25,
                size: "2",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "4",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "6",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "8",
                color: "Red",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "LikeaCloudBraLightSupport.jpeg"
    },
    {
        name: "License to Train Short Sleeve",
        description: "Crank out one more set. This ant-stink, sweat-wicking short-sleeve shirt is built to keep up.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Mens"
            },
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "LicensetoTrainShortSleeve.jpeg"
    },
    {
        name: "Metal Vent Tech Short Sleeve 2.0",
        description: "Meet the ultimate training top. Seamless construction, strategic venting, and anti-stink, it was born to perform sweat after sweat after sweat.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Mens"
            },
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "MetalVentTechShortSleeve2.0.jpeg"
    },
    {
        name: "Fast and Free Short Sleeve",
        description: "Take it further than the finish line. Keep it going in this breathable run top made with super lightweight mesh fabric.",
        price: 35.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Graphite Grey",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Graphite Grey",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Graphite Grey",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Chambray",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Chambray",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Chambray",
                gender: "Mens"
            },
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "FastandFreeShortSleeve.jpeg"
    },
    {
        name: "Engineered Warmth Long Sleeve",
        description: "Designed to perform outdoors. This merino wool-blend long sleeve has an engineered knit that creates a 3D texture for added warmth, and four-way stretch fabric for a full range of motion.",
        price: 79.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Copper",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Copper",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Copper",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "EngineeredWarmthLongSleeve.jpeg"
    },
    {
        name: "Drysense Long Sleeve",
        description: "Break a sweat. This long sleeve's abrasion-resistant mesh fabric has been developed to feel good against sweaty skin.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Gold",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Gold",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Gold",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "DrysenseLongSleeve.jpeg"
    },
    {
        name: "Swiftly Breathe Short Sleeve",
        description: "You love this one for its versatility, and we do too. This favourite anti-stink top is made with running and training in mind.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Red",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "SwiftlyBreatheShortSleeve.jpeg"
    },
    {
        name: "Hold Tight Short Sleeve",
        description: "The lightweight top you've been waiting for. It's super soft, with just the right amount of stretch and a second-skin fit.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Red",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "HoldTightShortSleeve.jpeg"
    },
    {
        name: "Swiftly Tech Long Sleeve 2.0 Race Length",
        description: "You asked, we listened. The updated Swiftly collection has an improved fit and added spandex so it won’t bag out during sweaty workouts. Your favourite top just got better.",
        price: 55.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Navy",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Navy",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Navy",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "SwiftlyTechLongSleeve2.0RaceLength.jpeg"
    },
    {
        name: "Muscle Love Long Sleeve",
        description: "Whether you're up for tranquil vibes or a big sweat, this relaxed-fit long sleeve is ready.",
        price: 65.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Pink",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Pink",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Pink",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Olive",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Olive",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Olive",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "MuscleLoveLongSleeve.jpeg"
    },
    {
        name: "Wunder Train Cropped Long Sleeve",
        description: "Craving coverage? This buttery-soft long sleeve was designed with sweaty yoga practices in mind.",
        price: 65.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Blue",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Blue",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Blue",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "WunderTrainCroppedLongSleeve.jpeg"
    },
    {
        name: "Cascade Coast Crew",
        description: "Meet your daily crew. This merino wool-blend sweater with anti-stink technology gets top marks for comfort and versatility.",
        price: 100.00,
        category: ["Sweatshirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Brown",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Brown",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Brown",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "CascadeCoastCrew.jpeg"
    },
    {
        name: "Alpine Air Crew",
        description: "Put your temperature on cruise control. This versatile merino wool sweater is naturally thermoregulating.",
        price: 90.00,
        category: ["Sweatshirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Navy",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Navy",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Navy",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Grey",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Grey",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Grey",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "AlpineAirCrew.jpeg"
    },
    {
        name: "All Yours Crew Terry",
        description: "Your post-practice glow feels even better in this incredibly comfortable crew.",
        price: 90.00,
        category: ["Sweatshirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "White",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "White",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "AllYoursCrewTerry.jpeg"
    },
    {
        name: "Ready to Roll Crew",
        description: "Feel cozy in this soft crew-neck sweater that's perfect for lightweight warmth after class.",
        price: 60.00,
        category: ["Sweatshirts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Pink",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Pink",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Pink",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "ReadytoRollCrew.jpeg"
    },
    {
        name: "ABC Jogger 30",
        description: "These sleek joggers feature our ABC™ Technology and four-way stretch Warpstreme™ fabric, making them an obvious choice for recreation or travel.",
        price: 110.00,
        category: ["Pants"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "S",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Olive",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "ABCJogger30.jpeg"
    },
    {
        name: "ABC Pant Slim Warpstreme 37",
        description: "The five-pocket jean, reinvented. These slim-fit pants are engineered with ABC™ Technology to give you freedom of movement and all-day comfort.",
        price: 110.00,
        category: ["Pants"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Olive",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Olive",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "ABCPantSlimWarpstreme37.jpeg"
    },
    {
        name: "Keep Moving Pant 7/8 High-Rise",
        description: "When life gets busy, your pants should be relaxed. These ones will keep you comfortable from morning till night.",
        price: 80.00,
        category: ["Pants"],
        inventory: [
            {
                quantity: 25,
                size: "2",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "4",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "6",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "8",
                color: "Grey",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "KeepMovingPant7/8High-Rise.jpeg"
    },
    {
        name: "Align Jogger 28",
        description: "When feeling nothing is everything. The Align collection, powered by Nulu™ fabric, is so weightless and buttery soft, all you feel is your practice.",
        price: 70.00,
        category: ["Pants"],
        inventory: [
            {
                quantity: 25,
                size: "2",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "4",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "6",
                color: "Grey",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "8",
                color: "Grey",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "AlignJogger28.jpeg"
    },
    {
        name: "At Ease Short 7",
        description: "Restoration starts now. These soft shorts feature textured fabric that relaxes over time to keep you comfortable after a workout.",
        price: 50.00,
        category: ["Shorts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Black",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Black",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "AtEaseShort7.jpeg"
    },
    {
        name: "Pace Breaker Short 9 Liner",
        description: "Run, train or stretch. Wear this lightweight, multi-sport short for pretty much everything. A built-in liner adds some support.",
        price: 50.00,
        category: ["Shorts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Blue",
                gender: "Mens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Blue",
                gender: "Mens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "PaceBreakerShort9Liner.jpeg"
    },
    {
        name: "Femme Force Super High Rise Short 8",
        description: "Bring that edge to your workout. Mesh fabric with faux boning details around the waist help keep you ventilated during tough training sessions.",
        price: 50.00,
        category: ["Shorts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Red",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Red",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "FemmeForceSuperHighRiseShort8.jpeg"
    },
    {
        name: "On the Fly Short",
        description: "Work or play, this is the one you'll want to reach for. The On the Fly collection pairs business casual vibes with all-day comfort fabrics.",
        price: 50.00,
        category: ["Shorts"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Green",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "M",
                color: "Green",
                gender: "Womens"
            },
            {
                quantity: 25,
                size: "L",
                color: "Green",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "OntheFlyShort.jpeg"
    },
    {
        name: "City Adventurer Backpack",
        description: "This backpack features a built-in pocket for sweaty gear so you can go from workout-to-work without having those worlds collide.",
        price: 50.00,
        category: ["Bags"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Black",
                gender: "Womens"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "CityAdventurerBackpack.jpeg"
    },
    {
        name: "Out Of Range Backpack",
        description: "It's go time. From sweat to whatever's next, this backpack has plenty of quick-access storage—there's even a protective-shell pocket for your shades.",
        price: 80.00,
        category: ["Bags"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Red",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "OutOfRangeBackpack.jpeg"
    },
    {
        name: "Command The Day Duffel",
        description: "A super-functional duffle with plenty of divided space because your shoes and workout gear don't need to get to know your laptop.",
        price: 90.00,
        category: ["Bags"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Grey",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "CommandTheDayDuffel.jpeg"
    },
    {
        name: "Cruiser Backpack",
        description: "That relaxed feeling of knowing the exact location of your phone, shades, and everything else as you cruise from work to workout.",
        price: 110.00,
        category: ["Bags"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Black",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "CruiserBackpack.jpeg"
    },
    {
        name: "Days Shade Ball Cap",
        description: "Rain or shine, you're ready. This lightweight ball cap is made with water-repellent fabric.",
        price: 20.00,
        category: ["Hats"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Red",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "DaysShadeBallCap.jpeg"
    },
    {
        name: "Fast and Free Men's Run Hat",
        description: "Keep sun and sweat out of your eyes with this lightweight, quick-drying run hat.",
        price: 20.00,
        category: ["Hats"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Navy",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "FastandFreeMensRunHat.jpeg"
    },
    {
        name: "Run for It All Beanie",
        description: "Keep on running—this water-repellent beanie is soft and cozy on chilly days.",
        price: 20.00,
        category: ["Hats"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Black",
                gender: "Women"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "RunforItAllBeanie.jpeg"
    },
    {
        name: "Cold Terrain Run Beanie",
        description: "Hear that? The trails are calling. Keep your head and ears warm on cold-weather runs in this soft, fitted beanie.",
        price: 20.00,
        category: ["Hats"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Olive",
                gender: "Men"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "ColdTerrainRunBeanie.jpeg"
    },
    {
        name: "Stay Hot Keep Cold Bottle",
        description: "Water how you want it. This double-walled stainless steel bottle keeps water cold for 24 hours and hot for 9 hours.",
        price: 40.00,
        category: ["Water Bottles"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "Black",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "StayHotKeepColdBottle.jpeg"
    },
    {
        name: "Stay Hot Keep Cold Bottle",
        description: "Water how you want it. This double-walled stainless steel bottle keeps water cold for 24 hours and hot for 9 hours.",
        price: 40.00,
        category: ["Water Bottles"],
        inventory: [
            {
                quantity: 25,
                size: "One Size",
                color: "White",
                gender: "Unisex"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "StayHotKeepColdBottle_white.jpeg"
    },
    {
        name: "Organic Superfood Protein Mix",
        description: "Boost your workout & get lean. Contains all essential amino acids. 2 vegan proteins & 3 energizing superfoods, no sweeteners. 60% highly absorbable protein. Formulated by holistic nutritionists",
        price: 40.00,
        category: ["Wellness"],
        inventory: [
            {
                quantity: 25,
                size: "N/A",
                color: "N/A",
                gender: "N/A"
            }
        ],
        sold: [
            {
                quantity: 0,
            }
        ],
        photo: "your-superfoods-superfood-mix-muscle-power-mix-15044125065291_1024x1024.jpeg"
    }
]

db.Products.deleteMany({})
    .then(() => db.Products.collection.insertMany(productSeed))
    .then(data => {
        console.log(data.result.n + " products inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
