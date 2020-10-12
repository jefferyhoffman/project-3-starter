const jokesController = require('express').Router();
const axios = require("axios");
// const BASEURL = "https://sv443.net/jokeapi/v2/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&amount=2";
const BASEURL = "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes"

jokesController.get('/', (req, res) => {
    axios.get(BASEURL)
        .then(data => {
            console.log(data.data)
            res.json(data.data);
        })

})

module.exports = jokesController;


