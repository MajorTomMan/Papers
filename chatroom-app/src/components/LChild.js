import React from "react"
import "../css/Ui.css"
import Chat from "./Chat"


export function LChildBottom(props){
    return (
        React.createElement(
            "div",
            {
                className:"ChildBottom"
            },
            React.createElement(
                Chat,
                {
                    value:props.value
                },
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