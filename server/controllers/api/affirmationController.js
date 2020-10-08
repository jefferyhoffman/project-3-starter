const affirmationController = require('express').Router();
const axios = require("axios");
const BASEURL = "http://www.affirmations.dev/"

affirmationController.get('/', (req, res) => {
    axios.get(BASEURL)
        .then(data => {
            console.log(data.data)
            res.json(data.data);
        })

})

module.exports = affirmationController;


