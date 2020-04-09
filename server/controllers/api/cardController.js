const cardController = require("express").Router();
const db = require("../../models");

cardController.post("/", (req, res) => {
  db.Card.create({
    title: req.body.title,
    body: req.body.body,
    // priority: req.body.priority,
  })
    .then((dbCard) => res.json(dbCard))
    .catch((err) => res.json(err));
});

cardController.put("/:id", ({ params, body }, res) => {
  db.Card.findByIdAndUpdate(
    {
      _id: params.id,
    },
    {
      $set: {
        title: body.title,
        body: body.body,
        // priority: body.priority,
      },
    }
  )
    .then((updatedCard) => res.json(updatedCard))
    .catch((err) => res.json(err));
});

cardController.delete("/:id", ({ params }, res) => {
  db.Card.findByIdAndDelete({
    _id: params.id,
  })
    .then((deletedCard) => res.json(deletedCard))
    .catch((err) => res.json(err));
});

module.exports = cardController;
