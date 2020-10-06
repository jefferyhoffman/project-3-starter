let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/saint-george", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const products = [
    {
        name: "Flow Y Longline Bra",
        description: "Low Support. Made for activities such as walking",
        price: 19.99,
        category: "Product Category",
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Red",
                gender: "Womens"
            }
        ],
        sold: 4,
        photo: " "
    }
]