const billsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

billsController.get('/', JWTVerifier, (req, res) => {
  db.Bills.find({email: req.user.email})
  .then(results => {
    res.json(results);
  })
  .catch(error => {
    if (error) throw error
  })
})
billsController.post('/',JWTVerifier,((req, res)=>{
  const newBill = req.body
  newBill.email= req.user.email
  console.log(newBill, req.user)
  db.Bills.create(req.body)
  .then(bill=>{
    console.log(bill)
    res.json(bill)
  })
  .catch(err=>{
    console.log(err)
    res.json(err).status(500)
  })
}))

module.exports = billsController;
