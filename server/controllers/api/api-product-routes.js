const apiProductRoutes = require("express").Router();
const db = require('../../models');

// product routes
// to get all products to display from the database

// apiProductRoutes.get("/api/products", async (req, res) => {
//     const products = await db.Product.findAll();
//     res.send(products);
// });

apiProductRoutes.get("/", function (req, res) {
    db.Product.findAll().then(function(results) {
        res.json(results)
    })
    
});

// apiProductRoutes.get("/api/products/:id", async (req, res) => {
//     const products = await db.Product.find({
//         where: {
//             product_id = req.params.id
//         },
//     });
//     res.send(products);
// });

// // not sure we need this route
// apiProductRoutes.post("/api/products", async (req, res) => {
//     const newProduct = db.Product(req.body);
//     const savedProduct = await newProduct.save();
//     res.send(savedProduct)
// })

// apiProductRoutes.delete("/api/products/:id", async (req, res) => {
//     const deletedProduct = await db.Product.delete({
//         where: {product_id = req.params.id},
//     });
//         res.send(deletedProduct);
    
// })

module.exports = apiProductRoutes;