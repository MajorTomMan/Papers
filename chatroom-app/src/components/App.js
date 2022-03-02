import React from 'react'
import Ui from "./Ui"
import { GetValueById } from '../hooks/useElements'



export default function App(props){
    let Value="Test"
    return (
        React.createElement(
            Ui,
            {
                value:Value
            },
            null
        )
    )
}