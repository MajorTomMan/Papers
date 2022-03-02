import React from 'react';
import ClickBox from './ClickBox';



export default function Chat() {
    return (
        React.createElement(
            "form",
            {
                className:"form"
            },
            React.createElement(
                "textarea",
                {
                    id:"Input",
                    placeholder:"请在此处输入聊天内容",
                },
                null
            ),
            React.createElement(
                ClickBox,
                null,
                null,
            ),
        )
    );
}


