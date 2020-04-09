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
      title: "In Progress"
    },
    {
      title: "Done"
    }
  ]
};
//Create a new board for the user
boardController.post("/", JWTVerifier, (req, res) => {
  db.Board.create({ ...template, 
    title: req.body.title,
    userId: req.user._id
  })
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

 //Find the user logged in's board
boardController.get("/userBoard", JWTVerifier, (req, res) => {
  db.Board.findById({
    userId: req.user._id
  })
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

module.exports = boardController;

