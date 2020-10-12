const clinicsController = require('express').Router();
const axios = require("axios");
const BASEURL = "https://api.foursquare.com/v2/venues/"

clinicsController.get('/', (req, res) => {
    axios.get(BASEURL)
        .then(data => {
            console.log(data.data)
            res.json(data.data);
        })

})

module.exports = clinicsController;
