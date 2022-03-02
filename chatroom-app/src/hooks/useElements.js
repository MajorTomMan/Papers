
import { useEffect } from "react";
import getElementValue_ByClass, { setElementValue_ById } from "../Tools/HandleElement";
import setElementValue_ByClass, { getElementValue_ById } from "../Tools/HandleElement";



export default function SetValueByClass(name,index){
    return useEffect(
        ()=>{
            setElementValue_ByClass(name,index);
        }
    )
}


export function GetValueByClass(name,index){
    return useEffect(
        ()=>{
            getElementValue_ByClass(name,index);
        }
    )
}

export function SetValueById(name){
    return useEffect(
        ()=>{
            setElementValue_ById(name);
        }
    )
}

export function GetValueById(name){
    return useEffect(
        ()=>{
            getElementValue_ById(name);
        }
    )
}