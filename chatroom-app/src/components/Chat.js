import React from 'react';
import ClickBox from './ClickBox';
import connect from "./Connect"

export default function Chat() {

    return (
        <form onSubmit={connect}>
            <textarea id="Input" name="inputData" placeholder='请在此处输入聊天内容' defaultValue={""} />
            <ClickBox />
        </form>
    )
}


