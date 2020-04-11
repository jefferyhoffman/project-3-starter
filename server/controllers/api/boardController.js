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


// UPDATE COLUMN: MOVE CARD
boardController.put("/:id/columns/:columnIndex/:newColumnIndex/cards/:cardIndex", JWTVerifier, (req, res) => {
  db.Board.findById(req.params.id)
  .then(board => {
    if(!board) {
      throw new Error("Invalid board ID");
    }

    const columnIndex = parseInt(req.params.columnIndex);
    const newColumnIndex = parseInt(req.params.newColumnIndex);
    const cardIndex = parseInt(req.params.cardIndex);

    let array1 = board.columns[columnIndex].cards;
    let array2 = board.columns[newColumnIndex].cards;
    let cardToMove = array1[cardIndex];

    if (!array1.length) {
      throw new Error("No items to remove. Hmm...");
    }

    array1.splice(cardIndex, 1);
    array2.push(cardToMove);

    return board.save();
    
  })
  .then(splicedCard => res.json(splicedCard))
  .catch(err => console.log(err))
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