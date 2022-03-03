import path from "path";
import express from "express"
import ReactDOMServer from "react-dom/server";
import Handle from "../src/AddressMessages/Handle";
import fs from "fs"


const PORT=process.env.PORT || 4000;
const app=express();
app.use(express.static("../build"))

app.get("/*",(req,res)=>{
        const app=ReactDOMServer.renderToString(
            <Handle />
        );
        const indexFile=path.resolve(
            "../build/index.html"
        )
        fs.readFile(
            indexFile,
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
    PORT,
    ()=>{
        console.log(`Server is listening on port ${PORT}`)
    }
)