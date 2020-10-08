const productsController = require('express').Router();
const db = require('../../models')


// Find all products
productsController.get("/", (req, res) => {
    db.Products.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})


productsController.get("/:id", (req, res) => {
    db.Products.find({_id: req.params.id})
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
    .sort({sold: -1})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})

// Find Category/Style
productsController.get("/category/:category", (req, res) => {
    db.Products.find({category: {"$in":[req.params.category]}})
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
    db.Products.find({category: {"$in":[req.params.category]}})
     .where('inventory.gender').equals(req.params.gender)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err)
    });
})
module.exports = productsController;