const mapController = require('express').Router();
const axios = require('axios');
const { map } = require('../../server');

mapController.get('/:zipcode', (req, res) => {
    axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + req.params.zipcode, {})
        .then(data => {
            // console.log(data.data.results);
            res.json(data.data.results);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})

module.exports = mapController