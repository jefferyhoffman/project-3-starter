const reviewsController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

// Route to retrieve all reviews in db, based on a RecipeId
reviewsController.get("/all/:id", (req, res) => {
    const RecipeId = req.params.id;

    console.log(req.body);
    console.log("RecipeId: ", RecipeId);
    db.Review.findAll({where: { RecipeId }}, {include: [{model: db.User, as: "users"}, {model: db.Recipe, as: "recipes"}]})
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
