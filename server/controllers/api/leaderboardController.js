const leaderboardController = require('express').Router();
const db = require('../../models');

//leaderboard routes
//get leaderboard
leaderboardController.get('/', (req, res) => {
    db.Score.find({})
        .then(score => {
            res.json(score)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});
// //update leaderboard, may not need
// leaderboardController.put('/:id', (req, res) => {
//     db.Score.updateOne(
//         { _id: req.params.id }
//     );
// });

// //user posting scores on leaderboard
leaderboardController.post('/', (req, res) => {
    let { username, highScore, lastGuess } = req.body;

    db.Score.create({ username, highScore, lastGuess })
        .then(userScore => {
            console.log("user score registered")
            res.json(userScore);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = leaderboardController;