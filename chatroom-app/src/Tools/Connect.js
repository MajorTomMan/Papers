
import {post} from "../Tools/Request"


export default async function Connect(Message)
{
    const Post=post(Message)
    let response=await fetch(
        Post
    )
    const body=await response.text()
    return body
}