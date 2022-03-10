import React from "react"
import Chat from "./Chat"
import "./css/Message.css"
import { List } from "./Form"

export function LChildBottom(){
    return (
        <div className="ChildBottom">
            <Chat />
        </div>
    )
}
export function LChildMain(){
    if(List){
        return (
            <div id="OutPut" className="ChildMain" >
                {
                     List.map(
                         ({name,message,time},i)=>{
                             return(
                                 <div key={i} className="Message">
                                     <p>
                                         {name}      {time} <br/>
                                         {message}
                                    </p>
                                 </div>
                             )
                         }
                     )
                }
             </div>
         )
    }
    else{
        <div id="OutPut" className="ChildMain" >
        </div>
    }
}