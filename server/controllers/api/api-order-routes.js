const express = require("express");
const path = require('path');
const app = express();
const db = require('./models');
const sequelize = require('sequelize');

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));


app.post("/api/orders", async (req, res) => {
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address||
        !req.body.total ||
        !req.body.cartItems 
    ) {
        return res.send({message: "Data is required." });
    }
      const order = await db.OrderDetails(req.body).save();
        res.send(order); 
});

app.get("/api/orders", async (req, res) => {
    const orders = await db.OrderDetails.find({});
    res.send(orders);
});

app.delete("/api/orders/:id", async (req, res) => {
    const order = await db.OrderDetails.find({
        where: {order_id = req.params.id},
        });
        res.send(order);
})

