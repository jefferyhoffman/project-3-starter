const router = require('express').Router();
const db = require('../../models');


router.get('/', (req, res) => {
    db.Properties.find()
      .then(properties => {
        return res.json({ properties })
      })
  });

  router.get('/:id', (req, res) => {
      const { id } = req.params
    db.Properties.findById(id)
      .then(property => {
        return res.json({ property })
      })
  });

  router.post('/', (req, res) => {
    const { address, date, task, employeeComments, clientComments, photo, propertyId} = req.body;
  
    
  
    db.Properties.create({ address, date, task, employeeComments, clientComments, photo, propertyId})
      .then(property => res.json({property}))
      .catch(err => res.json(err));
   
  });
  


module.exports = router;
