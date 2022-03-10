import React, { useContext } from 'react';
import ClickBox from './ClickBox';
import $ from "jquery"
import { Context } from "../../router/Router" 
import { Group } from '../../Tools/Connect';

export default function Form() {
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const {Name,Input,modifyList,modifyInput}=useContext(Context)
    const submit = async (event) => {
        event.preventDefault();
        modifyList(Input)
        let res=await Group({name:Name,message:Input})
        console.log(res)
        reset()
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
