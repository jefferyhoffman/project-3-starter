const booksController = require('express').Router();
const db = require('../../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;


booksController.get("/", function (req, res) {
    db.Book.findAll({})
        .then(function (allBooks) {
            res.json(allBooks);
        });
});

booksController.post("/search", function (req, res) {
  console.log(req.body)
    db.Book.findAll({
        where: {
            [Op.or]: [{title: {[Op.like]: `%${req.body.search}%`}}, { author: {[Op.like]: `%${req.body.search}%`}}]
        },
    }).then((data) => {
         res.send(data)  
    })
        .catch(err => res.json(err))
});

booksController.post("/post", function (req, res) {
    db.Book.create(req.body).then(createBook => {
        res.json(createBook);
    }).catch(err => res.json(err))
});

booksController.put("/update", function (req, res){
    db.Book.update(req.body,{
          where: {
            id: req.body.id
          }// do we need an update form or can they use addform
        })
        .then(function(dbBook) {
          res.json(dbBook);
        }).catch(err => res.json(err))
    });

booksController.delete("/delete", function(req, res) {
    db.Book.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(function(dbBook) {
        console.log(dbBook);
      }).catch(err => res.json(err))
  });

module.exports = booksController;


// db.Books.create({title: 'My First Book', author: 'Adam the React Guy', imageURL: 'https://via.placeholder.com/100', series: 'Adam\'s Many Reactions', synopsis: 'Stuff' })
// .then(created => console.log(created))