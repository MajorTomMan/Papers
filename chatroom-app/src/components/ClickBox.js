import Button from '@mui/material/Button'
import React from "react"
import { GetValueById } from "../hooks/useElements";

// 获取文本输入框信息并将其返回至上一个组件
function HandleMessages(){
    let Message=GetValueById("Input")
    console.log(Message)
    return React.createElement(
        "div",
        {
            className:"Message",
        },
        Message
    )
}


export default function ClickBox(){
    return (
        React.createElement(
            "div",
            {className:"ClickBox"},
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
                        onClick:()=>{
                            HandleMessages()
                        }
                    },
                    "发送"
                )
            )
        )
    )
}
