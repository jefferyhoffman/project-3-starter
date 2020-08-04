const recipesController = require("express").Router();
const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const { sequelize } = require("../../models");

// Date variable to use for current date set to MySQL DATETIME format
var newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log(newDate);

// Route to retrieve all recipes with all categories, ingredients and reviews.
recipesController.get("/all", (req, res) => {
    db.Recipe.findAll({
        include: [
            { model: db.Category, as: "categories" },
            { model: db.Ingredient, as: "ingredients" },
            {
                model: db.Review, include: [
                    { model: db.User, attributes: ["username"] }
                ]
            }
        ]
    }, {})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to retrieve all recipes for the logged in user with all categories, ingredients and reviews.
recipesController.get("/user", JWTVerifier, (req, res) => {
    db.Recipe.findAll({
        include: [
            { model: db.Category, as: "categories" },
            { model: db.Ingredient, as: "ingredients" },
            {
                model: db.Review, include: [
                    { model: db.User, attributes: ["username"] }
                ]
            },
            { model: db.User, as: "users", where: { id: req.user.id } }
        ]
    }, {})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to retrieve all recipes for a specific category with all ingredients and reviews.
recipesController.get("/category", JWTVerifier, (req, res) => {
    db.Recipe.findAll({
        include: [
            { model: db.Category, as: "categories", where: { id: req.body.id } },
            { model: db.Ingredient, as: "ingredients" },
            {
                model: db.Review, include: [
                    { model: db.User, attributes: ["username"] }
                ]
            }
        ]
    }, {})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to retrieve a specific recipe with all categories, ingredients and reviews.
recipesController.get("/:id", async (req, res) => {
    await db.Recipe.findAll({
        where: { id: req.params.id },
        include: [
            { model: db.Category, as: "categories" },
            { model: db.Ingredient, as: "ingredients" },
            {
                model: db.Review, include: [
                    { model: db.User, attributes: ["username"] }
                ]
            }        ]
    }, {})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to create a recipe and make associations to all the join tables
recipesController.post("/", JWTVerifier, async (req, res) => {
    const { title, image, description, prepTime, cookTime, servings, directions, categories, ingredients } = req.body;
    const users = req.user.id;
    let RecipeId;
    console.log(req.body, req.user.id)
    // Create the entry in Recipe table
    await db.Recipe.create(
        { title, image, description, prepTime, cookTime, servings, directions, ingredients, createdBy: req.user.username },
        {
            include: [
                { model: db.Ingredient, as: "ingredients" }
            ]
        })
        .then(recipe => {
            res.json(recipe);
            // Set the variable to use in join table relationships
            RecipeId = recipe.dataValues.id;
            console.log(recipe.dataValues.id);

            // Set the association between the recipe and the user
            var userQuery = "INSERT INTO `recipe_user` (createdAt, updatedAt, recipe_id, user_id) VALUES (?, ?, ?, ?);";
            db.sequelize.query(userQuery, {
                type: sequelize.QueryTypes.INSERT,
                replacements: [newDate, newDate, RecipeId, users]
            });

            // Set the association between the recipe and the category
            var categoryQuery = "INSERT INTO `recipe_category` (createdAt, updatedAt, recipe_id, category_id) VALUES (?, ?, ?, ?);";
            // Loop through array of Category Ids to relationship for each category
            categories.forEach(category => {
                console.log(category.category);
                db.sequelize.query(categoryQuery, {
                    type: sequelize.QueryTypes.INSERT,
                    replacements: [newDate, newDate, RecipeId, category.category]
                });
            });
        })
        .catch(err => res.json(err));
});

// Route to add existing recipe to the user's profile
recipesController.post("/:id", JWTVerifier, async (req, res) => {
    const UserId = req.user.id;
    const RecipeId = req.params.id;

    // Set the association between the recipe and the user
    var userQuery = "INSERT INTO `recipe_user` (createdAt, updatedAt, recipe_id, user_id) VALUES (?, ?, ?, ?);";
    db.sequelize.query(userQuery, {
        type: sequelize.QueryTypes.INSERT,
        replacements: [newDate, newDate, RecipeId, UserId]
    })
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to remove existing recipe from the user's profile
recipesController.delete("/:id", JWTVerifier, async (req, res) => {
    const UserId = req.user.id;
    const RecipeId = req.params.id;

    // Set the association between the recipe and the user
    var userQuery = "DELETE FROM `recipe_user` WHERE `recipe_id`=(?) AND `user_id`=(?);";
    db.sequelize.query(userQuery, {
        type: sequelize.QueryTypes.INSERT,
        replacements: [RecipeId, UserId]
    })
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

module.exports = recipesController;
