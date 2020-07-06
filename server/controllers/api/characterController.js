const characterController = require('express').Router();
const db = require('../../models');

characterController.get('/', (req, res) => {
    db.Character.findAll({})
        .then(allCharacters => {
            res.json(allCharacters);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//when the user interacts with card?
characterController.put('/:id', (req, res) => {
    db.Character.updateOne(

    )
});



module.exports = characterController;

