var Handle=require("../src/Messages")
var express = require('express');
var router = express.Router();

/* GET Handle listing. */
router.get('/', function(req, res, next) {
    res.status(200).send(
            {
                name:"Test",
                id:1,
                Message:"Test from servers",
            }
        )
    }
);
router.post('/', function(req, res, next) {
    let message=req.body
    console.log(message)
    console.log(Handle(message))
    res.status(200).send(
            Handle(message)
        )
    }
);

module.exports = router;