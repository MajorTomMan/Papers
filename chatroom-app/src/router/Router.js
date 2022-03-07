import React,{ createContext, useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App"


export const Context = createContext()

//路由导向,/导向App组件的渲染,Handle导向handle组件的渲染
export default function Pages(){
    let [List, setList] = useState([])
    const modifyList = (value) => {
        setList(
            [value,...List] //使用拷贝来修改数组数据防止数据丢失
        )
    }
    return (
        <Context.Provider value={{ List, modifyList }}>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </Context.Provider>
    )
}