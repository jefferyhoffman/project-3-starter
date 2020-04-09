const boardController = require("express").Router();
// const columnController = require("express").Router();
// const cardController = require("express").Router();
const { JWTVerifier } = require("../../lib/passport");
const db = require("../../models");

// BOARD TEMPLATE
const template = {
  columns: [
    {
      title: "To Do",
      cards: [
        {
          title: "Learn this app!",
          body: "How to use Kanban...",
        },
      ],
    },
    {
      title: "In Progress",
      cards: [],
    },
    {
      title: "Done",
      cards: [],
    },
  ],
};

// CREATE BOARD
boardController.post("/", JWTVerifier, (req, res) => {
  db.Board.create({ ...template, title: req.body.title, userId: req.user._id })
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

// READ USER'S BOARD
boardController.get("/", JWTVerifier, (req, res) => {
  res.json({ ...template, _id: "12345" });
});

// UPDATE BOARD
boardController.put("/:id", ({ params, body }, res) => {
  db.Board.findByIdAndUpdate(
    {
      _id: params.id,
    },
    {
      $set: {
        title: body.title,
      },
    }
  )
    .then((updatedBoard) => res.json(updatedBoard))
    .catch((err) => res.json(err));
});

// -------------------------------------------------------------------------

// CREATE COLUMN
boardController.post("/:id/columns", (req, res) => {
  db.Board.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: { "columns": req.body },
    }
  )
    .then((dbColumn) => res.json(dbColumn))
    .catch((err) => res.json(err));
});

// UPDATE COLUMN
boardController.put("/:id/columns/:column", ({ params, body }, res) => {
  db.Column.findByIdAndUpdate(
    {
      _id: params.id,
    },
    {
      $set: {
        title: body.title,
      },
    }
  )
    .then((updatedColumn) => res.json(updatedColumn))
    .catch((err) => res.json(err));
});

// DELETE COLUMN
boardController.delete("/:id/columns/:column", ({ params }, res) => {
  db.Column.findByIdAndDelete({
    _id: params.id,
  })
    .then((deletedColumn) => res.json(deletedColumn))
    .catch((err) => res.json(err));
});

// -------------------------------------------------------------------------

// CREATE CARD
boardController.post("/:id/columns/:index/cards", JWTVerifier, (req, res) => {
  db.Board.findById(req.params.id).then((board) => {
    if (!board) {
      throw new Error("Invalid board ID");
    }

    const index = parseInt(req.params.index);

    if (!board.columns[index]) {
      throw new Error("Invalid column index");
    }

    board.columns[index].cards.push(req.body);
    return board.save();
  });
});

// UPDATE CARD
boardController.put(
  "/:id/columns/:column/cards/:card",
  ({ params, body }, res) => {
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
  }
);

// DELETE CARD
boardController.delete(
  "/:id/columns/:column/cards/:card",
  ({ params }, res) => {
    db.Card.findByIdAndDelete({
      _id: params.id,
    })
      .then((deletedCard) => res.json(deletedCard))
      .catch((err) => res.json(err));
  }
);

module.exports = boardController;
