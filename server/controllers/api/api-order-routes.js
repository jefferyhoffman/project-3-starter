const apiOrderRoutes = require("express").Router();
const db = require('../../models');

// apiOrderRoutes.post("/api/orders", async (req, res) => {
//     if (
//         !req.body.name ||
//         !req.body.email ||
//         !req.body.address||
//         !req.body.total ||
//         !req.body.cartItems 
//     ) {
//         return res.send({message: "Data is required." });
//     }
//       const order = await db.OrderDetails(req.body).save();
//         res.send(order); 
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