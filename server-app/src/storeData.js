var Connect=require("./config/Start")



function Save({id,name,message}){
    let createTable = 'create table if not exists user(id int,name varchar(20),message varchar(200));'
    
    let str = ''
    Connect.connect();
    Connect.query("", function (err, result) {
            if (err) {
            console.log("error info:", err);
            }
            str=result;
            console.log(result)
        }
    )
    return str
}

module.exports=Save


