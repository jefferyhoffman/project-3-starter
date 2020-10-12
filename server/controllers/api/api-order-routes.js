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
apiOrderRoutes.get("/", JWTVerifier, function (req, res) {
    db.Order.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function (results) {
        res.json(results)
    })
});

//    find latest orders from userId and product

apiOrderRoutes.get("/latest", JWTVerifier, function (req, res) {
    db.Order.findAll({
        where: {
            UserId: req.user.id
        },
        order: [['createdAt', 'DESC']],
        limit: 1,
        include: {
            model: db.Product,
            through: { attributes: [] }
        }
    }).then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })

})



// creates an order for a specific user
apiOrderRoutes.post("/processing", JWTVerifier, function (req, res) {
    db.Order.create({
        UserId: req.user.id,
        orderStatus: 'processing'
    }).then(order => {
        return order.setProducts(req.body.products)
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
});

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