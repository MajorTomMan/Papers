import React,{ createContext, useState } from 'react'
import Menu from './ui/Ui'


export const Context = createContext()

export default function App() {    
    let [List,setList]=useState([])
    const modifyList=(value)=>{
        setList(
            value,...List
        )
        console.log("modifyList:",List)
    }
    let [Input,setInput]=useState("")
    const modifyInput=(value)=>{
        setInput(
            value,Input //第一个参数是新值 第二个是旧值
        )
    }
    return (
        <Context.Provider value={{ Input,modifyInput,List,modifyList }} > 
            <Menu />
        </Context.Provider>
    )
}
