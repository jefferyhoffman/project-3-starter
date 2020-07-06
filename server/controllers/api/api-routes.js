const characterController = require('express').Router();
const db = require('../../models');


characterController.get('/api/characters', (req, res) => {
    db.Character.find({})
        .then(allCharacters => {
            res.json(allCharacters);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//when the user interacts with card?
characterController.put('/api/characters/:id', (req, res) => {
    db.Character.updateOne(

    )
});

//leaderboard routes
//get leaderboard
characterController.get('/api/leaderboard/', (req, res) => {
    db.Leaderboard.find({})
        .then(score => {
            res.json(score)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});
//update leaderboard
characterController.put('/api/leaderboard/:id', (req, res) => {
    db.Leaderboard.updateOne(
        { _id: req.params.id }
    );
});

//user posting scores
characterController.post('/api/leaderboard/', (req, res) => {
    let { userName, score } = req.body;

    db.Leaderboard.insertOne({ userName, score })
        .then(userScore => {
            console.log("user score regiestered")
            res.json(userScore);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = gameController

