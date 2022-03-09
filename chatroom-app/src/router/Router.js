import React,{ createContext, useState } from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App"
import Login,{ LogUp } from "../components/user/Ui";


export const Context = createContext()

//路由导向,/导向App组件的渲染,Handle导向handle组件的渲染
export default function Pages(){
    let [List, setList] = useState([])
    const modifyList = (value) => {
        setList(
            [value,...List] //使用拷贝来修改数组数据防止数据丢失
        )
    }
    let [Input,setInput]=useState("")
    const modifyInput=(value)=>{
        setInput(
            value,Input //第一个参数是新值 第二个是旧值
        )
    }
    let [Name,setName]=useState("")
    const modifyName=(value)=>{
        setName(
            value,Name
        )
    }
    let [Password,setPassword]=useState("")
    const modifyPassword=(value)=>{
        setPassword(
            value,Password
        )
    }
    return (
        <Context.Provider value={{ List,Input,Name,Password,modifyList,modifyInput,modifyName,modifyPassword }}>
            <Routes>
                <Route path="/signin" element={<Login />}/>
                <Route path="/room" element={<App />}/>
                <Route path="/signup" element={<LogUp />}/>
                <Route path="*" element={<Login />} />
            </Routes> 
        </Context.Provider>
    )
}