const leaderboardController = require('express').Router();
const db = require('../../models');

//leaderboard routes
//get leaderboard
leaderboardController.get('/', (req, res) => {
    db.Leaderboard.find({})
        .then(score => {
            res.json(score)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});
// //update leaderboard
leaderboardController.put('/:id', (req, res) => {
    db.Leaderboard.updateOne(
        { _id: req.params.id }
    );
});

// //user posting scores
leaderboardController.post('/', (req, res) => {
    let { userName, score } = req.body;

    db.Leaderboard.insertOne({ userName, score })
        .then(userScore => {
            console.log("user score registered")
            res.json(userScore);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = leaderboardController;