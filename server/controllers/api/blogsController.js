const blogsController = require('express').Router();
const db = require('../../models')
const returnStateName = require('../../lib/stateabreviations')
const { JWTVerifier } = require('../../lib/passport');

blogsController.get('/', (req, res) => {
    db.Blogs.find({})
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})

blogsController.get('/user', JWTVerifier, (req, res) => {
    console.log(req.user)
    db.Blogs.find({ email: req.user.email })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})

blogsController.get("/city/:city", (req, res) => {
    db.Blogs.find({ city: req.params.city })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})
//searching state by abrivation
blogsController.get("/state/:state", (req, res) => {
    const fullStateName = returnStateName(req.params.state)
    db.Blogs.find({ state: fullStateName })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))
})
blogsController.get("/image/:image", (req, res) => {
    db.Blogs.find({ image: req.params.image })
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
blogsController.put('/', ((req, res) => {
    console.log(req.body, "here")
    db.Blogs.findByIdAndUpdate(req.body._id, { blog: req.body.blog })
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err))

}))
module.exports = blogsController; 