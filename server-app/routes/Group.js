var express = require('express');
var router = express.Router();
var List = require('../src/LinkList');

/* GET Handle listing. */
router.post('/', function (req, res, next) {
    console.log(req.body)
    List.insert(req.body)
    let response={
        data:List.query(),
        name:List.getName(),
    }
    console.log(response)
    res.status(200).send(
        response
    )
});

module.exports = router;