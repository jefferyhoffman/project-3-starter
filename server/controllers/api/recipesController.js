const recipesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

// Route to retrieve all recipes in db
// recipesController.get("/", (req, res) => {

// })

// Route to create a new recipe
recipesController.post("/", JWTVerifier, (req, res) => {
    const { title, description, prepTime, cookTime, servings, directions, categories, ingredients } = req.body;

    // Create the entry in Recipe table
    db.Recipe.create(
        { title, description, prepTime, cookTime, servings, directions, categories, ingredients, createdBy: req.user.username }, 
        { include: [{model: db.Category, as: "categories"}, {model: db.Ingredient, as: "ingredients"}] }
    )
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));

});

module.exports = recipesController;
