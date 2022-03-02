import React from 'react';
import { LChildBottom,LChildMain } from "./LChild"
import { RChildBottom,RChildMain } from "./RChild"
import Title from "./Title"

import "../css/Ui.css"
import "../css/LChild.css"
import "../css/RChild.css"
import "../css/Title.css"

function Top(){
    return (
        React.createElement(
            "div",
            {
                className:"Title"
            },
            React.createElement(
                "p",
                {
                    className:"title"
                }
            ),
            React.createElement(
                Title,
                null,
                null,
            )
        )
    )
}
function Context(){
    return (
        React.createElement(
            "div",
            {
                className:"Context"
            },
            React.createElement(
                Left,
                null,
                null,
            ),
            React.createElement(
                Right,
                null,
                null,
            )
        )
    )
}
function Right(){
    return (
        React.createElement(
           "div",
           {
               className:"RightUi"
           },
           React.createElement(
               RChildMain,
               null,
               null,
           ),
           React.createElement(
               RChildBottom,
               null,
               null
           )
        )
    );
}

function Left(){
    return (
        React.createElement(
            "div",
            {
                className:"LeftUi",
            },
            React.createElement(
                LChildMain,
                null,
                null
            ),
            React.createElement(
                LChildBottom,
                null,
                null
            ),
        )
    );
}


export default function Menu(){
    return (
        React.createElement(
            React.Fragment,
            null,
            React.createElement(
                Top,
                null,
                null
            ),
            React.createElement(
                Context,
                null,
                null
            ),
        )
    );
}