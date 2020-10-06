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
        category: "Bra's",
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
    }
]

// db.Product.deleteMany({})
//   .then(() => db.Product.collection.insertMany(productSeed))
//   .then(data => {
//     console.log(data.result.n + " products inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
