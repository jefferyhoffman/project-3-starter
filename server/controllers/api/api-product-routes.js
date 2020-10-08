const express = require("express");
const path = require('path');
const app = express();
const db = require('./models');
const sequelize = require('sequelize');

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));


// product routes
// to get all products to display from the database

app.get("/api/products", async (req, res) => {
    const products = await db.Product.find({});
    res.send(products);
});

app.get("/api/products/:id", async (req, res) => {
    const products = await db.Product.find({
        where: {
            product_id = req.params.id
        },
    });
    res.send(products);
});

// not sure we need this route
app.post("/api/products", async (req, res) => {
    const newProduct = db.Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await db.Product.delete({
        where: {product_id = req.params.id},
    });
        res.send(deletedProduct);
    
})





