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
        category: ["Bras"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            }
        ],
        sold: 0,
        photo: "lulu.jpeg"
    },
    {
        name: "Flow Y Longline Bra",
        description: "Feels like nothing at all. Powered by buttery-soft fabric, this long-line yoga bra has minimal seams to help keep your mind on the moment.",
        price: 19.99,
        category: ["Bras"],
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "White",
                gender: "Womens"
            }
        ],
        sold: 0,
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
                color: ["White", "Olive", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "LicensetoTrainShortSleeve.jpeg"
    },
    {
        name: "License to Train Short Sleeve",
        description: "Crank out one more set. This ant-stink, sweat-wicking short-sleeve shirt is built to keep up.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "M",
                color: ["White", "Olive", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "LicensetoTrainShortSleeve.jpeg"
    },
    {
        name: "License to Train Short Sleeve",
        description: "Crank out one more set. This ant-stink, sweat-wicking short-sleeve shirt is built to keep up.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "L",
                color: ["White", "Olive", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
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
                color: ["White", "Blue", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "MetalVentTechShortSleeve2.0.jpeg"
    },
    {
        name: "Metal Vent Tech Short Sleeve 2.0",
        description: "Meet the ultimate training top. Seamless construction, strategic venting, and anti-stink, it was born to perform sweat after sweat after sweat.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "M",
                color: ["White", "Blue", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "MetalVentTechShortSleeve2.0.jpeg"
    },
    {
        name: "Metal Vent Tech Short Sleeve 2.0",
        description: "Meet the ultimate training top. Seamless construction, strategic venting, and anti-stink, it was born to perform sweat after sweat after sweat.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "L",
                color: ["White", "Blue", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
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
                color: ["Graphite Grey", "Chambray", "White"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "FastandFreeShortSleeve.jpeg"
    },
    {
        name: "Fast and Free Short Sleeve",
        description: "Take it further than the finish line. Keep it going in this breathable run top made with super lightweight mesh fabric.",
        price: 35.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "M",
                color: ["Graphite Grey", "Chambray", "White"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "FastandFreeShortSleeve.jpeg"
    },
    {
        name: "Fast and Free Short Sleeve",
        description: "Take it further than the finish line. Keep it going in this breathable run top made with super lightweight mesh fabric.",
        price: 35.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "L",
                color: ["Graphite Grey", "Chambray", "White"],
                gender: "Mens"
            }
        ],
        sold: 0,
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
                color: ["Copper", "White", "Olive"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "EngineeredWarmthLongSleeve.jpeg"
    },
    {
        name: "Engineered Warmth Long Sleeve",
        description: "Designed to perform outdoors. This merino wool-blend long sleeve has an engineered knit that creates a 3D texture for added warmth, and four-way stretch fabric for a full range of motion.",
        price: 79.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "M",
                color: ["Copper", "White", "Olive"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "EngineeredWarmthLongSleeve.jpeg"
    },
    {
        name: "Engineered Warmth Long Sleeve",
        description: "Designed to perform outdoors. This merino wool-blend long sleeve has an engineered knit that creates a 3D texture for added warmth, and four-way stretch fabric for a full range of motion.",
        price: 79.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "L",
                color: ["Copper", "White", "Olive"],
                gender: "Mens"
            }
        ],
        sold: 0,
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
                color: ["Gold", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "DrysenseLongSleeve.jpeg"
    },
    {
        name: "Drysense Long Sleeve",
        description: "Break a sweat. This long sleeve's abrasion-resistant mesh fabric has been developed to feel good against sweaty skin.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "M",
                color: ["Gold", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "DrysenseLongSleeve.jpeg"
    },
    {
        name: "Drysense Long Sleeve",
        description: "Break a sweat. This long sleeve's abrasion-resistant mesh fabric has been developed to feel good against sweaty skin.",
        price: 45.00,
        category: ["Shirts"],
        inventory: [
            {
                quantity: 25,
                size: "L",
                color: ["Gold", "Black"],
                gender: "Mens"
            }
        ],
        sold: 0,
        photo: "DrysenseLongSleeve.jpeg"
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
