const apiOrderRoutes = require("express").Router();
const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');

// get all orders 
// apiOrderRoutes.get("/", function (req, res)  {
//  db.Order.findAll().then(function(results) {
//     res.json(results)
// })    
// });

// show one order for specific user
apiOrderRoutes.get("/", JWTVerifier, function (req, res)  {
    db.Order.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function(results) {
       res.json(results)
   })    
   });

//    find latest orders from userId and product
apiOrderRoutes.get("/latest", JWTVerifier, function (req, res)  {
    db.Order.findAll({
        where: {
            UserId: req.user.id
        },
        order: [['createdAt', 'DESC']],
        limit: 1,
        include: {
            model: db.Product,
            through: { attributes: []}
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })

   })    
   


// creates an order for a specific user
// apiOrderRoutes.post("/", JWTVerifier, function (req, res) {
//     if (
//         !req.body.first ||
//         !req.body.last ||
//         !req.body.email||
//         !req.body.address||
//         !req.body.city||
//         !req.body.state||
//         !req.body.zip||
//         !req.body.country ||
//         !req.body.phone 
//     ) {
//         return res.send({message: "Data is required." });
//     } else {
//       db.Order_Products(req.body).create();
//         res.json(order); 
//     }
// });

// apiOrderRoutes.get("/api/orders", async (req, res) => {
//     const orders = await db.OrderDetails.find({});
//     res.send(orders);
// });

// apiOrderRoutes.delete("/api/orders/:id", async (req, res) => {
//     const order = await db.OrderDetails.find({
//         where: {order_id = req.params.id},
//         });
//         res.send(order);
// })

module.exports = apiOrderRoutes;