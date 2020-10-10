const mongoose = require("mongoose");
const productsController = require('express').Router();
const db = require('../../models')


// Find all products by gender
productsController.get("/all/:gender", (req, res) => {
    db.Products.find({
        'inventory.gender': req.params.gender
    })
    // .where('inventory.gender').equals(req.params.gender)
    .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

// Most popular
productsController.get("/popular", (req, res) => {
    db.Products.find({})
        .sort({ sold: -1 })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

// Find Category/Style
productsController.get("/category/:category", (req, res) => {
    db.Products.find({ category: { "$in": [req.params.category] } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});
// Find Category/Gender
productsController.get("/category/:category/:gender", (req, res) => {
    db.Products.find({ category: { "$in": [req.params.category] } })
        .where('inventory.gender').equals(req.params.gender)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

// Find item
productsController.get("/:id", (req, res) => {
    db.Products.findById(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})
module.exports = productsController;