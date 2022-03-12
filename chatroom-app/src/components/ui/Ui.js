import React, { useContext } from 'react';
import { Context } from "../App"
import { LChildBottom,LChildMain } from "./LChild"
import { RChildBottom,RChildMain } from "./RChild"
import Title from "./Title"
import { Query } from '../../Tools/Connect';

import "./css/Ui.css"
import "./css/LChild.css"
import "./css/RChild.css"
import "./css/Title.css"

function Top(){
    return (
        <div className='Title'>
            <p className='title'>
                <Title />
            </p>
        </div>
    )
}
function Content(){
    return (
        <div className='Context'>
            <Left />
            <Right />
        </div>
    )
}
function Right(){
    return (
        <div className="RightUi">
            <RChildMain />
            <RChildBottom />
        </div>
    );
}

function Left(){
    return (
        <div className="LeftUi">
            <LChildMain />
            <LChildBottom />
        </div>
    );
}


export default function Menu(){
    const { modifyList,modifyName} = useContext(Context)
    setInterval(
        async ()=>{
            let res=await Query()
            res=JSON.parse(res)
            let temp=getdata(res)
            let username=getname(res)
            modifyList(temp)
            modifyName(username)
        },2000
    )
    const getdata=({data})=>{
        return [...data]
    }
    const getname=({name})=>{
        return name
    }
    return (
        <React.Fragment>
            <Top />
            <Content />
        </React.Fragment>
    );
}