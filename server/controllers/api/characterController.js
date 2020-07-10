const characterController = require('express').Router();
const db = require('../../models');

characterController.get('/', (req, res) => {
    db.Character.find({})
        .then(allCharacters => {
            res.json(allCharacters);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = characterController;

