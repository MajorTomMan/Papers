import React from "react";
import { GetValueById } from "../hooks/useElements";


export default function Handle(){
    return React.createElement(
        "div",
        {
            className:"Hello"
        },
        React.createElement(
            "p",
            null,
            "Hello!"
        )
    )
}


export function HandleMessages(){

}

function GetMessages(){
    let Messages=GetValueById("Input")
    console.log(Messages)
    return Messages;
}


function FormatMessages(Messages){
    return React.createElement(
        "div",
        {
            className:"Message",
        },
        Messages
    )
}

function SendMessages(Messages){
    fetch()
}


