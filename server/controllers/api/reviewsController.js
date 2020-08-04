const reviewsController = require("express").Router();
const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

// Route to retrieve star ratings for all recipes
reviewsController.get("/all", (req, res) => {

    db.Review.findAll({
        attributes: ["RecipeId", [db.sequelize.fn('AVG', db.sequelize.col("stars")), "stars" ]],
        group: "stars",
        order: [[db.sequelize.fn('AVG', db.sequelize.col("stars")), "DESC" ]]
    })
    .then(review => res.json(review))
    .catch(err => res.json(err));
});

// Route to create a new review
reviewsController.post("/", JWTVerifier, (req, res) => {
    const { review, stars, RecipeId } = req.body;
    const UserId = req.user.dataValues.id;

    // Create the entry in review table
    db.Review.create(
        { review, stars, RecipeId, UserId }
    )
        .then(review => res.json(review))
        .catch(err => res.json(err));

});

module.exports = reviewsController;
