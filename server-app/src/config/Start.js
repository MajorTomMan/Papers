var mysql=require("mysql")
var config=require("./Config").config

const  Connection = mysql.createConnection(config);

module.exports=Connection