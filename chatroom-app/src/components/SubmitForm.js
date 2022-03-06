import React,{ useState}from 'react';
import ClickBox from './ClickBox';
import Connect from './Connect';

export default function Form(){
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const [input,setInput]=useState(
        {
            value:""
        }
    )
    const submit=()=>{
        let form=document.getElementById("InputForm")
        form.submit(Connect(input.value))
    }
    return (
        <React.Fragment>
            <form  method='POST' id="InputForm" target="stop" onSubmit={submit}> 
                <textarea id="Input"  name="message" placeholder='请在此处输入聊天内容'
                          defaultValue={""}
                          onInput={
                              (event)=>{
                                  console.log(event.target.value)
                                  setInput(
                                      {value:event.target.value}
                                    )
                                }
                            } //查看并修改状态中的值
                />
                <ClickBox input={input.value} />
            </form>
            <iframe title='Iframe' name="stop" style={{display:"None"}}></iframe>  
        </React.Fragment>
    )
}
