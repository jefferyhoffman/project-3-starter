const productsController = require('express').Router();
const db = require('../../models')


// Find all products
productsController.get("/api/products", (req, res) => {
    db.Products.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})


productsController.get("/api/products/:id", (req, res) => {
    db.Products.find({_id: req.params.id})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})

// Most popular
productsController.get("/api/products/popular", (req, res) => {
    db.Products.find({})
    .sort({sold: -1})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})
// Find Category/Style
productsController.get("/api/products/:category", (req, res) => {
    db.Products.find({category: req.params.category})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})
