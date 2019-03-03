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
        location: req.body.location,
        trip_length: req.body.trip_length,
        itinerary: req.body.itinerary,
        description: req.body.description,
        images: req.body.images
    };
    db.Trips.create(trip)
    .then(function(results) {
        res.send('trip successfully added');
    })
    .catch(function(err) {
        if (err) {
            console.log(err);
        }
    });
    // db.Trips.save(trip, function(err, result) {
    //     if(err) {
    //         console.log(err);
    //     }
    //     res.send('trip successfully added');
});

// Defining methods for the tripsController
module.exports = tripsController;