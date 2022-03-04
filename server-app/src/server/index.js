import path from "path";
import express from "express"
import ReactDOMServer from "react-dom/server";
import Handle from "../src/AddressMessages/Handle";
import fs from "fs"
import React from "react";
import Test from "../src/data/test.json"

const PORT=4000;
const app=express();
app.use(express.static("../build"))

app.get("/*",(req,res)=>{
    res.send(
        res.json(Test)
    )
});

app.listen(
    PORT,
    ()=>{
        console.log(`Server is listening on port ${PORT}`)
    }
)