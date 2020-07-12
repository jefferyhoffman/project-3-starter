const recipesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

// Route to retrieve all recipes (including categories/ingredients) in db
recipesController.get("/all", (req, res) => {
    db.Recipe.findAll({include: [{model: db.Category, as: "categories"}, {model: db.Ingredient, as: "ingredients"}]}, {})
    .then(recipe => res.json(recipe))
    .catch(err => res.json(err));
});

// Route to pull all recipes for the logged in user
recipesController.get("/user", JWTVerifier, (req, res) => {
    db.Recipe.findAll({include: [
        {model: db.Category, as: "categories"}, 
        {model: db.Ingredient, as: "ingredients"}, 
    {model: db.User, as: "users", where: { id: req.user.id }}
    ]}, {})
    .then(recipe => res.json(recipe))
    .catch(err => res.json(err));
});

// Route to create a recipe and make associations to all the join tables
recipesController.post("/", JWTVerifier, async (req, res) => {
    const { title, image, description, prepTime, cookTime, servings, directions, categories, ingredients } = req.body;
    const users = req.user.id;
    let RecipeId;
    // Create the entry in Recipe table
    await db.Recipe.create(
        { title, image, description, prepTime, cookTime, servings, directions, categories, ingredients, createdBy: req.user.username }, 
        { include: [{model: db.Category, as: "categories"}, {model: db.Ingredient, as: "ingredients"}, {model: db.User, as: "users"} ] }
    )
        .then(recipe => {
            res.json(recipe);
            RecipeId = recipe.dataValues.id;
            console.log(recipe.dataValues.id);
        })
        .catch(err => res.json(err));

        var newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log(newDate);
        var sqlQuery = "INSERT INTO `recipe_user` (createdAt, updatedAt, recipe_id, user_id) VALUES (?, ?, ?, ?);";
        db.sequelize.query(sqlQuery, {
                type: sequelize.QueryTypes.INSERT,
                replacements: [newDate, newDate, RecipeId, users]
            })
});


module.exports = recipesController;
