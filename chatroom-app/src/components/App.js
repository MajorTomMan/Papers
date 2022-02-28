import React from 'react'
import useHeightByClass from '../hooks/UseHeight'
import Ui from "./Ui"



export default function App(){
    useHeightByClass("Title",0)
    return (
        <Ui />
    )
}