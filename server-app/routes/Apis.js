var express = require('express');
var router = express.Router();


/* GET Handle listing. */
router.all('/', function (req, res, next) {
    res.status(200).send(
        "Hello!"
    )
});

module.exports = router;