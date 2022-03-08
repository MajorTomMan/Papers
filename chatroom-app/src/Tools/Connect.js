
import {post,POST} from "../Tools/Request"


export default async function SendMesage(Message)

{
    const Post=post(Message)
    let response=await fetch(
        Post
    )
    return response.text()
}


export async function SendUserInfo(Message)

{
    const Post=POST(Message)
    let response=await fetch(
        Post
    )
    return response.text()
}