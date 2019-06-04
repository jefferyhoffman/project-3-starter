const itemsController = require('express').Router();
const db = require('../../models');


// Find all items
itemsController.get('/', (req, res) => {
  const { name, price, brand, quantity, img } = req.body;

  db.Item.findAll({ name, price, brand, quantity, img })
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

// Create a new item
itemsController.post('/create', (req, res) => {
  const { name, price, brand, quantity, img } = req.body;

  db.Item.create({ name, price, brand, quantity, img })
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

// update existing item
itemsController.put('/:name', (req, res) => {
  const { name, price, brand, quantity, img } = req.body;

  db.Item.update(
    { name, price, brand, quantity, img },
    { where: {name: req.params.name} })
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

// delete existing item by ID
itemsController.delete('/:id', (req, res) => {
  const { name, price, brand, quantity, img } = req.body;

  db.Item.destroy(
    { where: {id: req.params.id} })
    .then(item => res.json(item))
    .catch(err => res.json(err));
});


module.exports = itemsController;