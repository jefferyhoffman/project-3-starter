const reviewsController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

// Route to retrieve all reviews in db
reviewsController.get("/all", (req, res) => {
    db.Review.findAll({}, {include: [{model: db.User, as: "users"}, {model: db.Recipe, as: "recipes"}]})
    .then(review => res.json(review))
    .catch(err => res.json(err));
});

// Route to create a new review
reviewsController.post("/", JWTVerifier, (req, res) => {
    const { review, stars } = req.body;

    // Create the entry in review table
    db.Review.create(
        { review, stars }, 
        { include: [{model: db.User, as: "users"}, {model: db.Ingredient, as: "recipes"}] }
    )
        .then(review => res.json(review))
        .catch(err => res.json(err));

});

module.exports = reviewsController;
