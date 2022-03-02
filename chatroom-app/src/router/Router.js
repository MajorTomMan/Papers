import React from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App";
import Handle from "../Tools/Handlemessage"

export default function RouterDir(){
    return React.createElement(
        "div",
        null,
        React.createElement(
            Routes,
            null,
            React.createElement(
                Route,
                {
                    path:"/",
                    element:React.createElement(
                        App,
                        null,
                        null,
                    ),
                }
            ),
            React.createElement(
                Route,
                {
                    path:"/Handle",
                    element:React.createElement(
                        Handle,
                        null,
                        null,
                    )
                }
            ),
        )
    )
}