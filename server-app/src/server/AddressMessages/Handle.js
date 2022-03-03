import React from "react";


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



function FormatMessages(Messages){
    return React.createElement(
        "div",
        {
            className:"Message",
        },
        Messages
    )
}

