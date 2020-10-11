const router = require('express').Router();
const path = require("path")
const apiControllers = require('./api');

router.use('/api', apiControllers)

router.route("*").get((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
})
module.exports = router;
