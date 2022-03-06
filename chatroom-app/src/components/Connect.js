
import {post} from "../Tools/Request"

export default function Connect(Message)
{
    const Post=post(Message)
    fetch(
        Post
    )
    .then(
        res=>res.text()
    )
    .then(
        (data)=>{
            console.log("请求返回的数据:");
            console.log(data);
        }
    )
    .catch(console.error)
}


export function SaveData(message){
    const cacheData=message;
    return cacheData;
}