import React from 'react';
import { LChildBottom,LChildMain } from "./LChild"
import { RChildBottom,RChildMain } from "./RChild"
import Title from "./Title"

import "../css/Ui.css"
import "../css/LChild.css"
import "../css/RChild.css"
import "../css/Title.css"

function Top(props){
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
function Context(props){
    return (
        React.createElement(
            "div",
            {
                className:"Context"
            },
            React.createElement(
                Left,
                {
                    value:props.value
                },
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
function Right(props){
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

function Left(props){
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
                {
                    value:props.value,
                },
                null
            ),
        )
    );
}


export default function Menu(props){
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
                {
                    value:props.value
                },
                null
            ),
        )
    );
}