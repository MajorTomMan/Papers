import React,{ useState,useEffect }from 'react';
import ClickBox from './ClickBox';
import Connect from './Connect';

export default function Form(){
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const [input,setInput]=useState(
        {
            value:""
        }
    )
    const Submit=() => {
        let formdata=new FormData(document.getElementById("InputForm"))
        console.log("formdata:")
        console.log(formdata.get("message"))
        Connect(formdata)
    }
    return (
        <React.Fragment>
            <form  action="http://localhost:4000/" method='POST' id="InputForm" target="stop" onSubmit={Submit}>
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
