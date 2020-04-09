const boardController = require("express").Router();

const { JWTVerifier } = require("../../lib/passport");
const db = require("../../models");

const template = {
  columns: [
    {
      title: "To Do",
      cards: [
        {
          title: "Learn this app!",
          body: "How to use Kanban..."
        }
      ]
    },
    {
      title: "In Progress",
      cards: []
    },
    {
      title: "Done",
      cards: []
    }
  ]
};

boardController.get("/", JWTVerifier, (req, res) => {
  res.json({ ...template, _id: "12345" });
});

boardController.post("/", JWTVerifier, (req, res) => {
  db.Board.create({ ...template, 
    title: req.body.title,
    userId: req.user._id
  })
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

boardController.post("/:id/columns/:index/cards", JWTVerifier, (req, res) => {
  db.Board.findById(req.params.id)
    .then((board) => {
      if (!board) {
        throw new Error("Invalid board ID");
      }
      
      const index = parseInt(req.params.index);

      if (!board.columns[index]) {
        throw new Error("Invalid column index");
      }

      board.columns[index].cards.push(req.body);
      return board.save();
    })
    .then((updatedBoard) => res.json(updatedBoard))
    .catch((err) => res.json(err));
});

module.exports = boardController;
