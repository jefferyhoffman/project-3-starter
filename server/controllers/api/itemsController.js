const itemsController = require('express').Router();
const db = require('../../models');

itemsController.post('/api/items/:name', (req, res) => {
    const { name, price, brand, quanitity, img } = req.body;
  
    db.items.create({ name, price, brand, quanitity, img })
      .then(item => res.json(item))
      .catch(err => res.json(err));
  });

itemsController.get()
  
  module.exports = itemsController;
