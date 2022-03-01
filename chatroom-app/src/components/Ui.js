import React from 'react';
import Title from './Title';
import { LChildBottom,LChildMain } from "./LChild"
import { RChildBottom,RChildMain } from "./RChild"

import "../css/Ui.css"
import "../css/LChild.css"
import "../css/RChild.css"
import "../css/Title.css"

function Top(){
    return (
        <div className='Title'>
            <p className='title'>
                <Title />
            </p>
        </div>
    )
}
function Context(){
    return (
        <div className='Context'>
            <Left />
            <Right />
        </div>
    )
}
function Right(){
    return (
        <div className='RightUi'>
            <RChildMain />
            <RChildBottom />
        </div>
    );
}

function Left(){
    return (
        <div className='LeftUi'>
            <LChildMain />
            <LChildBottom />
        </div>
    );
}


export default function Menu(){
    return (
        <>
            <Top />
            <Context />
        </>
    );
}