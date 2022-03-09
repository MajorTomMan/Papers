var Pool = require("./config/Start")



async function Insert({ name, password, firstname, lastname, message }) {
    let insert = `insert into user(name,password,firstname,lastname,message) 
    value('${name}','${password}','${firstname}','${lastname}','${message}');`
    let res=await CreateConnect(insert)
    console.log("返回插入结果:",res)
    return {
        code:1,
        msg:"请求插入成功",
        data:res
    }
}

async function Update({ name, passsword }) {
    let update = `update user set password='${passsword}' where name='${name}';`
    let res=await CreateConnect(update)
    return {
        code:1,
        msg:"请求更新成功",
        data:res
    }
}
async function Delete({ name }) {
    let del = `delete from user where name='${name}';`
    let res=await CreateConnect(del)
    return {
        code:1,
        msg:"请求删除成功",
        data:res
    }
}
async function Select({ name }) {
    let select = `select * from user where name='${name}';`
    let res=await CreateConnect(select)
    console.log("返回查询结果:",res)
    return {
        code:1,
        msg:"请求查询成功",
        data:res
    }
}
async function CreateTable() {
    let createTable = `create table if not exists user
    (id int primary key auto_increment,name varchar(20),
    password varchar(20),firstname varchar(20),
    lastname varchar(20),message varchar(200));`
    let res=await CreateConnect(createTable)
    return {
        code:1,
        msg:"请求创表成功",
        data:res
    }
}

async function DeleteTable(){
    let dropTable = `drop table if exists user;`
    let res=await CreateConnect(dropTable)
    return {
        code:1,
        msg:"请求删表成功",
        data:res
    } 
}

function CreateConnect(sql) {
    return new Promise(
        (res,rej)=>{
            Pool.getConnection(
                (err, Connection) => {
                    if (err) {
                        console.log("建立连接失败")
                        console.log(err)
                    }
                    else {
                        console.log("建立连接成功")
                        Connection.query(
                            sql, (err, result) => {
                                if (err) {
                                    console.log("操作失败")
                                    console.log(err)
                                }
                                else {
                                    console.log("操作成功")
                                    res(JSON.parse(JSON.stringify(result)))
                                }
                            }
                        )
                        Connection.release();
                    }
                }
            )
        }
    )
}

module.exports = {
    CreateTable: CreateTable,
    DeleteTable:DeleteTable,
    Insert: Insert,
    Delete: Delete,
    Update: Update,
    Select: Select,
}

