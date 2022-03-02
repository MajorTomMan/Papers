import React from "react"
import "../css/Ui.css"
import Chat from "./Chat"


export function LChildBottom(){
    return (
        React.createElement(
            "div",
            {
                className:"ChildBottom"
            },
            React.createElement(
                Chat,
                null,
                null
            )
        )
    )
}
export function LChildMain(){
    return (
        React.createElement(
            "div",
            {
                className:"ChildMain"
            }
        )
    )
}