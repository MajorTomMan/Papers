import Button from '@mui/material/Button'
import { json } from 'express'
import React, { useEffect } from "react"

export default function ClickBox(){
    /* const send=useEffect(
        ()=>{
            const data=fetch(
                "http://localhost:4000",
                {
                    method:"get",
                    mode:"no-cors"
                }
            )
            const js=data.json()
            console.log(js)
        }
    )*/
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
                        /* onClick:{
                            send
                        } */
                    },
                    "发送"
                )
            )
        )
    )
}
