import path from "path";
import express from "express"
import { ReactDOMServer } from "react-dom/server";
import Handle from "./server/AddressMessages/Handle";
import fs from "fs"


const Port=process.env.Port || 3005;
const app=(express);
app.request(express.static("./AddressMessages/Handle.js"))

app.get("/*",(req,res)=>{
        const app=ReactDOMServer.renderToString(
            <Handle />
        );
        const indexFile=path.resolve(
            "./AddressMessages/Handle.js"
        )
        fs.readFile(indexFile,
            "uft8",
            (err,data)=>{
                return res.send(
                    data.replace(
                        `<div id="root"></div>`,
                        `<div id="root">${app}</div>`
                    )
                );
            }
        );
    }
);


app.listen(
    Port,
    ()=>{
    console.log(`Server is listening on port ${Port}`)
    }
)