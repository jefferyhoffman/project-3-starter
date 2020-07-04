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

    //
    app.get('/api/leaderboard/', (req, res) => {
        db.Leaderboard.find({})
        .then(score => {
            res.json(score)
        })
        .catch(err => {
            res.json(err);
        })
    })

    
}

