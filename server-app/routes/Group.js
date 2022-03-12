var express = require('express');
var router = express.Router();
var List = require('../src/LinkList');


router.get('/',function(req,res,next){
    let response={
        data:List.query(),
        name:List.getName(),
    }
    res.status(200).send(
        response
    )
});


/* GET Handle listing. */
router.post('/', function (req, res, next) {
    console.log(req.body)
    List.insert(req.body)
});

module.exports = router;