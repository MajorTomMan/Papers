import React, { useEffect } from "react"
import connect from "./Connect"

export default function ClickBox(){
    const send=useEffect(
        connect("TTTTTest")
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
                    "button",
                    {
                        type:"Button",
                        variant:"contained",
                        size:"small",
                    },
                    "关闭"
                ),
                React.createElement(
                    "button",
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
