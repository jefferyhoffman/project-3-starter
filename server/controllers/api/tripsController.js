const tripsController = require('express').Router();
const db = require('../../models');

tripsController.get('/', function(req, res) {
    db.Trips.find({})
      .then(function(results){
          res.json(results)
      })
      .catch(function(err){
          if(err) throw err;
      })
})


tripsController.post('/', function(req, res, next) {
    let trip = {
        user: req.body.user,
        location: req.body.location,
        trip_length: req.body.trip_length,
        itinerary: req.body.itinerary,
        description: req.body.description,
        images: req.body.images
    };
    db.Trips.create(trip)
    .then(function(results) {
        console.log(results);
        res.send('trip successfully added');
    })
    .catch(function(err) {
        if (err) {
            console.log(err);
        }
    });
});
tripsController.get("/:location", function(req, res){
    console.log(req.params.location)
    db.Trips.find({
        "location": req.params.location
    })
    .then(function(results){
        res.json(results)
    })
    .catch(function(err){
        if(err) throw err;
    })
})

module.exports = tripsController;