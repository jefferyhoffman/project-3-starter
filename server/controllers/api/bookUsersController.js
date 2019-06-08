const bookUsersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');


bookUsersController.post('/', JWTVerifier, (req, res) => {
  console.log(req.user, req.body.book)
  req.user.addBook(req.body.book.id)
  .then(added => console.log(added))
  .catch(err => console.log(err))
})

bookUsersController.get('/myLibrary', JWTVerifier, (req, res) => {
  req.user.getBooks()
  .then(books => res.json(books))
  .catch(err => console.log(err))
})

bookUsersController.post('/removeFromLibrary', JWTVerifier, (req, res) => {
  req.user.removeBook(req.body.book.id)
  .then(removed => {
    req.user.getBooks()
    .then(books => res.json(books))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
})
module.exports = bookUsersController;
