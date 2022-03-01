
import { useEffect } from "react";
import getElementValue_ByClass, { setElementValue_ById } from "../Tools/HandleElement";
import setElementValue_ByClass, { getElementValue_ById } from "../Tools/HandleElement";



export default function useElments(name,index){
    const setElementByClass=useEffect(
        ()=>{
            setElementValue_ByClass(name,index);
        }
    )
    const getElementByClass=useEffect(
        ()=>{
            getElementValue_ByClass(name,index);
        }
    )
    const setElementById=useEffect(
        ()=>{
            setElementValue_ById(name,index);
        }
    )
    const getElementById=useEffect(
        ()=>{
            getElementValue_ById(name,index);
        }
    )
    return [setElementByClass,getElementByClass,setElementById,getElementById];
}