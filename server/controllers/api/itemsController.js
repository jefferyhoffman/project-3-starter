const itemsController = require('express').Router();
const db = require('../../models');

// API route ...
itemsController.post('/:name', (req, res) => {
    const { name, price, brand, quantity, img } = req.body;
  
//...to create a new item
    db.Items.create({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));

//...to update an item
      db.Items.updateOne({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });
// API route to find all items
  itemsController.get('/', (req, res) => {
    const { name, price, brand, quantity, img } = req.body;
  
    db.Items.findAll({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });

  // API route to delete items
  itemsController.get('/:name', (req, res) => {
    const { name, price, brand, quantity, img } = req.body;
  
    db.Items.remove({ name, price, brand, quantity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });

 
  module.exports = itemsController;
