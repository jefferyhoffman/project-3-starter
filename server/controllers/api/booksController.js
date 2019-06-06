const booksController = require('express').Router();
const db = require('../../models');


booksController.get("/", function (req, res) {
    db.Book.findAll({})
        .then(function (allBooks) {
            res.json(allBooks);
        });
});
booksController.get("/search", function (req, res) {
    console.log("findOne", req.body)
    db.Book.findOne({
        where: {
            [Op.or]: [{ title: req.body }, { author: req.body }]
        },
    }).then(() => {
        if (title === "" && author === "") {
            return $(".response").text('<p className="noBook">We do not have that book or author in our database please add it.</p>')
        } else if (title !== "") {
            res.json(req.body);
        } else {
            db.Books.findAll({ author })
                .then(() => res.json(req.body)
                )
        }
    })
        .catch(err => res.json(err))

});

booksController.post("/", function (req, res) {
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
        });
    });

booksController.delete("/:id", function(req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBook) {
        res.json(dbBook);
      });
  });

module.exports = booksController;


// db.Books.create({title: 'My First Book', author: 'Adam the React Guy', imageURL: 'https://via.placeholder.com/100', series: 'Adam\'s Many Reactions', synopsis: 'Stuff' })
// .then(created => console.log(created))