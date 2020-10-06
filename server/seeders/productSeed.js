let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/saint-george", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const products = [
    {
        name: "Product Name",
        description: "Product Description",
        price: 19.99,
        category: "Product Category",
        inventory: [
            {
                quantity: 25,
                size: "S",
                color: "Red",
                gender: "Unisex"
            }
        ],
        sold: 4,
        photo: " "
    }
]