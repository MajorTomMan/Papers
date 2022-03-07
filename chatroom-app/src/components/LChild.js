import React from "react"
import "../css/Ui.css"
import Chat from "./Chat"
import { useContext } from "react"
import { Context } from "../router/Router"
import "../css/Message.css"

export function LChildBottom(){
    return (
        <div className="ChildBottom">
            <Chat />
        </div>
    )
}
export function LChildMain(){
    const {List}=useContext(Context)
    return (
       <div id="OutPut" className="ChildMain" >
           {
                List.map(
                    (data,i)=>{
                        return(
                            <div key={i} className="Message">
                                {data}
                            </div>
                        )
                    }
                )
           }
        </div>
    )
}