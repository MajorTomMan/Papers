
import getElementValue_ByClass, { setElementValue_ById } from "../Tools/HandleElement";
import setElementValue_ByClass, { getElementValue_ById } from "../Tools/HandleElement";



export default function SetValueByClass(name,index){
    return setElementValue_ByClass(name,index);
}


export function GetValueByClass(name,index){
    return getElementValue_ByClass(name,index);
}

export function SetValueById(name){
    return setElementValue_ById(name);
}

export function GetValueById(name){
    return  getElementValue_ById(name);
}