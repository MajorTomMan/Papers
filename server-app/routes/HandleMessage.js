var CreateTable = require("../src/Sql").CreateTable
var Insert = require("../src/Sql").Insert
var Delete = require("../src/Sql").Delete
var Select = require("../src/Sql").Select
var Update = require("../src/Sql").Update
var Pool = require("../src/config/Start")
var express = require('express');
const { DeleteTable } = require("../src/Sql")
var router = express.Router();

/* GET Handle listing. */
router.get('/', function (req, res, next) {
    res.status(200).send(
        "Hello!"
    )
}
);
router.post('/', async function (req, res, next) {
    let message = req.body
    console.log(message)
    let Dresult=await DeleteTable()
    res.status(200).send(
        [
            Dresult
        ]
    )
});

module.exports = router;