const db = require("../../models/");

module.exports = {
  findAll: function (req, res) {
    db.Thread.findAll(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Thread.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: db.Reply,
          include: [{ 
            model: db.User,
            attributes: ['email']
          }]
        },
        {
          model: db.User,
          attributes: ['email']
        }
      ],
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Thread.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Thread.findOneandUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Thread.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
