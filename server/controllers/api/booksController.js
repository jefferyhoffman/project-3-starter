const booksController = require('express').Router();
const db = require('../../models');

module.exports = function (app) { 
    app.get("/api/books/", function (req, res) {
        db.Books.findAll({})
            .then(function (allBooks) {
                res.json(allBooks);
            });
    });
    app.get("/api/books/", function (req, res) {
        db.Books.findOne({
            where: {
                title: req.params.title
            },
            include [book]
    }).then(function (oneBook) {
                res.json(oneBook);
            });
    }); //(or if filled in -title, author, image, series, synopsis )
    app.post("/api/books/", function(req, res) {
        db.Books.create(req.body).then(function(createBook) {
          res.json(createBook);
        });
      });

};  
module.exports booksController


// db.Books.create({title: 'My First Book', author: 'Adam the React Guy', image: 'https://via.placeholder.com/100', series: 'Adam\'s Many Reactions', synopsis: 'Stuff' })
// .then(created => console.log(created))