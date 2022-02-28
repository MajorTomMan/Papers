import {useEffect} from "react";
import setElementInlineHeightByClass from "../Tools/GetElementHeight"

export default function useHeightByClass(name,index){
    return (
        useEffect(
            ()=>{
                setElementInlineHeightByClass(name,index)
            }
        )
    );
}