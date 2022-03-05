import handle from "../Tools/generateMessage";
import {post} from "../Tools/Request"

export default function Connect({Data})
{
    if(!Data){
        return null;
    }
    let message={};
    fetch(
        post
    )
    .then(
        res=>res.text()
    )
    .then(
        (data)=>{
            console.log("请求返回的数据:");
            console.log(data);
            Data=data;
            handle(message,Data);
            console.log("消息对象的值");
            console.log(message);
            SaveData(message)
        }
    )
    .catch(console.error)
    return Object.entries(message)
}


export function SaveData(message){
    const cacheData=message;
    return cacheData;
}