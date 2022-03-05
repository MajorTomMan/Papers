import React, { useState } from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App"
import Connect from "../components/Connect";



//路由导向,/导向App组件的渲染,Handle导向handle组件的渲染

export default function Pages(){
    let [Res,setResponse]=useState({
        Data:{},
    }) 
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
                        Connect,
                        {
                            Res
                        },
                    ),
                }
            )
        )
    )
}