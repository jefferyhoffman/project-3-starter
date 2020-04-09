var boardModels = require("./board");

module.exports = {
  Users: require('./user'),
  Secrets: require('./secret'),
  Board: boardModels.Board,
  Column: boardModels.Column,
  Card: boardModels.Card
}
