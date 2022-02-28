import React from 'react';
import "../css/Ui.css"
import Title from './Title';


function ChildBottom(){
    return (
        <div className='ChildBottom'>

        </div>
    )
}
function ChildMain(){
    return (
        <div className='ChildMain'>

        </div>
    )
}
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
            <ChildMain />
            <ChildBottom />
        </div>
    );
}

function Left(){
    return (
        <div className='LeftUi'>
            <ChildMain />
            <ChildBottom />
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