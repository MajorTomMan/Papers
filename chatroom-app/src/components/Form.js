import React, { useContext, useState } from 'react';
import ClickBox from './ClickBox';
import Connect from '../Tools/Connect';
import $ from "jquery"
import { Context } from "../router/Router"

export default function Form() {
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const {modifyList}=useContext(Context)
    const [input, setInput] = useState({value: ""})
    const submit = (event) => {
        event.preventDefault();
        let formdata = new FormData(document.getElementById("InputForm"))
        console.log("formdata:")
        console.log(formdata.get("message"))
        let res=Connect(formdata.get("message"))
        reset()
        res.then(
            (data)=>{
                modifyList(data)
            }
        )
    }
    const reset = () => {
        $("#Input").val("")
    }
    return (
        <React.Fragment>
            <form id="InputForm" target="stop" onSubmit={submit}>
                <textarea id="Input" name="message" placeholder='请在此处输入聊天内容'
                    defaultValue={input.value}
                    onInput={
                        (event) => {
                            setInput(
                                {
                                    value: event.target.value //查看并修改状态中的值
                                } 
                            )
                        }
                    }
                />
                <ClickBox input={input.value} />
            </form>
            <iframe title='Iframe' name="stop" style={{ display: "None" }}></iframe>
        </React.Fragment>
    )
}
