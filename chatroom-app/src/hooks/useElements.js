
import { useEffect } from "react";
import getElementValue_ByClass, { setElementValue_ById } from "../Tools/HandleElement";
import setElementValue_ByClass, { getElementValue_ById } from "../Tools/HandleElement";



export default function useElments(name,index){
    const SetElementByClass=function(){
        useEffect(
            ()=>{
                setElementValue_ByClass(name,index);
            }
        )
    }
    const GetElementByClass=function(){
        useEffect(
            ()=>{
                getElementValue_ByClass(name,index);
            }
        )
    }
    const SetElementById=function(){
        useEffect(
            ()=>{
                setElementValue_ById(name);
            }
        )
    }
    const GetElementById=function(){
        useEffect(
            ()=>{
                getElementValue_ById(name);
            }
        )
    }
    return [SetElementByClass(),GetElementByClass(),SetElementById(),GetElementById()];
}