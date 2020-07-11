const categoriesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");

// Route to retrieve all categories
categoriesController.get("/all/", (req, res) => {
    db.Category.findAll({}, {})
    .then(categories => res.json(categories))
    .catch(err => res.json(err));
});

// Route to create a new category
categoriesController.post("/", JWTVerifier, (req, res) => {
    const { category } = req.body;

    // Create the entry in category table
    db.Category.create(
        { category }
    )
        .then(category => res.json(category))
        .catch(err => res.json(err));

});

module.exports = categoriesController;
