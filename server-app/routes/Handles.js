var Handle=require("../src/Messages")
var express = require('express');
var router = express.Router();

/* GET Handle listing. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
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
    console.log(req.body)
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(
            Handle()
        )
    }
);

module.exports = router;
