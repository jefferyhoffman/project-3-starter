const itemsController = require('express').Router();
const db = require('../../models');

// Create a new item
itemsController.post('/:name', (req, res) => {
    const { name, price, brand, quantity, img } = req.body;
  
    db.Items.create({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));

      db.Items.updateOne({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });
// Find all items
  itemsController.get('/', (req, res) => {
    const { name, price, brand, quantity, img } = req.body;
  
    db.Items.findAll({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });

 
  module.exports = itemsController;
