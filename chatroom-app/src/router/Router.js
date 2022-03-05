import React, { useState } from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App"



//路由导向,/导向App组件的渲染,Handle导向handle组件的渲染

export default function Pages(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </div>
    )
}