const express = require('express');
const stripeController = express.Router();
const router = express.Router();
// const authHelpers = require('../auth/_helpers');
const routeHelpers = require('./stripeHelper');
// const productQueries = require('../db/queries/products');

// router.get('/', (req, res, next) => {
//   return productQueries.getAllProducts()
//   .then((products) => {
//     const renderObject = {
//       title: 'all products',
//       user: req.user,
//       messages: req.flash('messages'),
//       products: products
//     };
//     res.render('products.html', renderObject);
//   })
//   .catch((err) => {
//     return next(err);
//   });
// });

// router.get('/:id', (req, res, next) => {
//   const productID = parseInt(req.params.id);
//   return productQueries.getSingleProduct(productID)
//   .then((product) => {
//     const renderObject = {
//       title: product.name,
//       user: req.user,
//       messages: req.flash('messages'),
//       product: product
//     };
//     res.render('product.html', renderObject);
//   })
//   .catch((err) => {
//     return next(err);
//   });
// });

// router.get('/:id/charge', authHelpers.loginRequired, (req, res, next) => {
//   const productID = parseInt(req.params.id);
//   return productQueries.getSingleProduct(productID)
//   .then((product) => {
//     const renderObject = {
//       title: `buy ${product.name}`,
//       user: req.user,
//       messages: req.flash('messages'),
//       product: product
//     };
//     res.render('charge.html', renderObject);
//   })
//   .catch((err) => {
//     return next(err);
//   });
// });
// need to put our auth here to connect
// router.post('/:id/stripe', authHelpers.loginRequired, (req, res, next) => {

router.post('/:id/stripe', (req, res, next) => {
  const stripeToken = req.body.stripeToken;
  const productID = parseInt(req.body.productID);
  const productAmount = req.body.productAmount;
  const userID = parseInt(req.user.id);
  // validate product
//   return routeHelpers.validateProduct(productID, productAmount)
//   .then((product) => {
//     // create charge
    const charge = {
      amount: productAmount,
      currency: product.currency,
      card: stripeToken
    };
    return routeHelpers.createCharge(charge, productID, userID)
//   })
  .then(() => {
    res.JSON({status: 'success'});
  })
  .catch((err) => {
    return next(err);
  });
});

// router.post('/', authHelpers.adminRequired, (req, res, next) => {
//   return productQueries.addProduct(req.body)
//   .then((product) => {
//     if (!product) { throw new Error('Something went wrong'); }
//     req.flash('messages', {
//       status: 'success',
//       value: 'Product added!'
//     });
//     return res.redirect('/');
//   })
//   .catch((err) => { next(err); });
// });

module.exports = stripeController;


// stripe.createToken(card).then(function(result) {
//   // Handle result.error or result.token
// })