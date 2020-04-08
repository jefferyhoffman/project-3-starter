const columnController = require("express").Router();
const db = require("../../models");

// Create a column
columnController.post("/", (req, res) => {
  db.Column.create(req.body)
    .then((dbColumn) => res.json(dbColumn))
    .catch((err) => res.json(err));
});

// Update a column
columnController.put("/:id", (req, res) => {
  db.Column.update(req.body)
    .then((dbColumn) => res.json(dbColumn))
    .catch((err) => res.json(err));
});

// Delete a column
columnController.delete("/:id", (req, res) => {
  db.Column.findByIdAndDelete({_id: req.params.id,})
    .then((deletedColumn) => res.json(deletedColumn))
    .catch((err) => res.json(err));
});

module.exports = columnController;
