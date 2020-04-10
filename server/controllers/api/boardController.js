const boardController = require("express").Router();
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
  db.Board.create(
    {
      ...template,
      title: req.body.title,
      userId: req.user._id,
    }
  )
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

// READ USER'S BOARD
boardController.get("/", JWTVerifier, (req, res) => {
  db.Board.findOne({ userId: req.user._id })
    .then(results => { res.json(results) })
    .catch((err) => res.json(err));
});
// req.user.id will be used to get user id


// UPDATE BOARD
boardController.put("/:id", JWTVerifier, ({ params, body }, res) => {
  db.Board.findByIdAndUpdate(
    {
      _id: params.id,
    },
    {
      $set:
      {
        title: body.title,
      },
    }
  )
    .then(updatedBoard => { res.json(updatedBoard) })
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
      $push: { columns: req.body },
    }
  )
    .then((dbColumn) => res.json(dbColumn))
    .catch((err) => res.json(err));
});

// UPDATE COLUMN
boardController.put("/:id/columns/:column", JWTVerifier, (req, res) => {
  db.Board.findOneAndUpdate(
    {
      _id: req.params.id,
      "columns._id": req.params.column,
    },
    {
      $set: {
        "columns.$.title": req.body.title,
      },
    }
  )
    .then((updatedColumn) => res.json(updatedColumn))
    .catch((err) => res.json(err));
});

// DELETE COLUMN
boardController.delete("/:id/columns/:column", (req, res) => {
  db.Board.find(
    {
      _id: req.params.id
    }
  )
    .then((deletedColumn) => res.json(deletedColumn))
    .catch((err) => res.json(err));
});

// UPDATE COLUMN: DELETE CARD

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
  })
    .then((updatedBoard) => res.json(updatedBoard))
    .catch((err) => res.json(err));
});

// UPDATE CARD
// PUT /1/columns/0/cards/0
boardController.put("/:id/columns/:colIndex/cards/:cardIndex", JWTVerifier, (req, res) => {
  db.Board.findById(req.params.id)
    .then(board => {
      if (!board) {
        throw new Error("Invalid board ID");
      }

      const colIndex = parseInt(req.params.colIndex);
      const cardIndex = parseInt(req.params.cardIndex);

      const card = board.columns[colIndex].cards[cardIndex];
      if (!card) {
        throw new Error("Invalid colIndex or cardIndex");
      }

      card.title = req.body.title;
      card.body = req.body.body;
      // card.priority = req.body.priority;

      return board.save();
    })
    .then((updatedBoard) => res.json(updatedBoard))
    .catch(err => console.log(err));
});
<<<<<<< HEAD
// DELETE CARD
boardController.delete("/:id/columns/:column/cards/:card", ({ params }, res) => {
  db.Card.findByIdAndDelete({
    _id: params.id,
  })
    .then((deletedCard) => res.json(deletedCard))
    .catch((err) => res.json(err));
});

module.exports = boardController;
=======

// DELETE CARD
boardController.delete("/:id/columns/:columnIndex/cards/:cardIndex", JWTVerifier, (req, res) => {
  db.Board.findById(req.params.id)
    .then(board => {
      if (!board) {
        throw new Error("Invalid board ID");
      }

      const colIndex = parseInt(req.params.columnIndex);
      const cardIndex = parseInt(req.params.cardIndex);

      const removed = board.columns[colIndex].cards.splice(cardIndex, 1);
      if (!removed.length) {
        throw new Error("No items removed. Hmn...");
      }

      console.log(JSON.stringify(board, null, 2));
      return board.save();
    })
    .then(updatedBoard => res.json(updatedBoard))
    .catch(err => console.log(err))
});

module.exports = boardController;
>>>>>>> 746d7da259b8d4a8fc1d93f2c83f425f4e5d6a4e
