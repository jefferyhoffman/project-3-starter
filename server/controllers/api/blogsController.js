const blogsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

blogsController.get('/', (req, res) => {
    db.Blogs.find({})
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))

})
blogsController.get("/city/:city", (req, res) => {
    db.Blogs.find({ city: req.params.city })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})
blogsController.get("/state/:state", (req, res) => {
    db.Blogs.find({ city: req.params.state })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})
blogsController.get("/image/:image", (req, res) => {
    db.Blogs.find({ city: req.params.image })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})
blogsController.post('/', ((req, res) => {
    db.Blogs.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))

}))
blogsController.delete('/', ((req, res) => {
    db.Blogs.deleteOne(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))

}))
blogsController.update('/', ((req, res) => {
    db.Blogs.updateOne(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))

}))
module.exports = blogsController; 