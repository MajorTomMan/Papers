import React, { useContext } from 'react';
import ClickBox from './ClickBox';
import SendMesage from '../../Tools/Connect';
import $ from "jquery"
import { Context } from "../../router/Router"

export default function Form() {
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const {Input,modifyList,modifyInput}=useContext(Context)
    const submit = (event) => {
        event.preventDefault();
        let res=SendMesage(Input)
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
                    defaultValue={Input.value}
                    onInput={
                        (event) => {
                            console.log(Input)
                            modifyInput(event.target.value)
                        }
                    }
                />
                <ClickBox />
            </form>
            <iframe title='Iframe' name="stop" style={{ display: "None" }}></iframe>
        </React.Fragment>
    )
}
