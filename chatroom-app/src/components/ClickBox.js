import Button from '@mui/material/Button'
import React from "react"

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
                        type:"Button",
                        variant:"contained",
                        size:"small",
                    },
                    "发送"
                )
            )
        )
    )
}
