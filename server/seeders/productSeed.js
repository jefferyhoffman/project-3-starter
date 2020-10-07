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
