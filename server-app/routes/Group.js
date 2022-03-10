var express = require('express');
var router = express.Router();
var List = require('../src/LinkList');


/* GET Handle listing. */
router.post('/', function (req, res, next) {
    console.log(req.body)
    List.insert(req.body)
    res.status(200).send(
        List.query()
    )
});

module.exports = router;