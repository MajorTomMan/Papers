import handle from "../Tools/generateMessage";
import {post} from "../Tools/Request"

export default function Connect(props)
{
    let message={};
    fetch(
        post
    )
    .then(
        res=>res.text()
    )
    .then(
        (data)=>{
            console.log("请求返回的数据:" +data)
            props.Res.Data=JSON.parse(data)
            console.log("通过props传入的Res中Data的值:"+props.Res.Data)
            handle(message,props.Res)
            console.log("消息对象的值"+message)
        }
    )
    .catch(console.error)
    return null;
}