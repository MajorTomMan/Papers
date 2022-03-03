import Button from '@mui/material/Button'
import React, { useEffect } from "react"
import Test from "../data/test.json"


export default function ClickBox(){
    const send=useEffect(
        ()=>{
            fetch(
                "http://localhost:3000/Handle",
                {
                    method:"get",
                    Test,
                }
            )
            .then(res=>res.text)
            .then(json=>json.results)
            .then(console.log)
            .catch(console.error)
        }
    )
    return (
        React.createElement(
            "div",
            {
                className:"ClickBox",
            },
            React.createElement(
                "p",
                null,
                React.createElement(
                    Button,
                    {
                        type:"Button",
                        variant:"contained",
                        size:"small",
                    },
                    "关闭"
                ),
                React.createElement(
                    Button,
                    {
                        type:"Submit",
                        variant:"contained",
                        size:"small",
                        onClick:{
                            send
                        }
                    },
                    "发送"
                )
            )
        )
    )
}
