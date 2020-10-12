const forumController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');
// const { format } = require('morgan');

forumController.post('/', (req, res) => {
  console.log(req.body)
  
  db.Forums.create(req.body)
    .then(post => res.json(post))
    .catch(err => res.json(err));
});

// forumController.save()
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });

// forumController.save(function(err, forumController){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Your Post HJas Been Saved!!");
//   }
// });

// forumController.remove({id, title, post, author})


forumController.get('/', (req, res) => {
  db.Forums.find({}).limit(20)
    .then(posts => {
        res.json(posts);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

// forumController.save()
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });

// forumController.save(function(err, forumController){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Your Post Has Been Saved!");
//   }
// });

// forumController.delete('/', (req, res) => {
//   db.Forum.find({})
//     .then(posts => {
//       res.json(posts);
//     }) 
//     .catch(err => {
//       console.log(err);
//       res.json(err);
//     }) 
// })

// forumController.update

module.exports = forumController;
