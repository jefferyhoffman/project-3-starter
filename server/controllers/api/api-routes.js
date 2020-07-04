const db = require('../models');

module.exports = function (app) {
    app.get('/api/characters', (req, res)=> {
        db.Character.find({})
        .then(allCharacters => {
            res.json(allCharacters);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.put('/api/characters/:id', (req, res)=> {
        db.Character.updateOne(
            
        )
    });

    //leaderboard routes
    //get leaderboard
    app.get('/api/leaderboard/', (req, res) => {
        db.Leaderboard.find({})
        .then(score => {
            res.json(score)
        })
        .catch(err => {
            res.json(err);
        })
    });
    //update leaderboard
    app.put('/api/leaderboard/:id', (req, res) => {
        db.Leaderboard.updateOne(
        {_id: req.params.id}
        );
    });

    
}

