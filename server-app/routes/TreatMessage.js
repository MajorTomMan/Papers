var Handle=require("../src/Messages")
var Save=require("../src/storeData")
var express = require('express');
var router = express.Router();

/* GET Handle listing. */
router.get('/', function(req, res, next) {
    res.status(200).send(
            "Hello!"
        )
    }
);
router.post('/', function(req, res, next) {
    let message=req.body
    console.log(message)
    res.status(200).send(
            Save({id:1,name:"",Mesasge:""})
        )
    }
);

module.exports = router;