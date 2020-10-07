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
                size: "XL",
                color: "White",
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
            },
            {
                quantity: 25,
                size: "XL",
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
