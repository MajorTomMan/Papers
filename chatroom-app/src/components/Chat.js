import React, { useState } from 'react';
import ClickBox from './ClickBox';



export default function Chat(props) {
    const [Value,setValue]=useState(props.value)
    return React.createElement(
        "form",
        {
            className:"form"
        },
        React.createElement(
            "textarea",
            {
                id:"Input",
                placeholder:"请在此处输入聊天内容",
                defaultValue:Value,
                onSelect:()=>{
                    setValue()
                }
            },
        ),
        React.createElement(
            ClickBox,
            null,
            null,
        ),
    )
}


