const ingredientsController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");

// Route to retrieve all ingredients
ingredientsController.get("/all/", (req, res) => {
    db.Ingredient.findAll({}, {})
    .then(ingredients => res.json(ingredients))
    .catch(err => res.json(err));
});

// Route to create a new ingredient
ingredientsController.post("/", JWTVerifier, (req, res) => {
    const { ingredient } = req.body;

    // Create the entry in ingredient table
    db.Ingredient.create(
        { ingredient }
    )
        .then(ingredient => res.json(ingredient))
        .catch(err => res.json(err));

});

module.exports = ingredientsController;
