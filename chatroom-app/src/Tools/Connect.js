
import {update,insert,select,del,group} from "../Tools/Request"


export async function Update(Message)

{
    const Post=update(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Insert(Message)

{
    const Post=insert(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Delete(Message)

{
    const Post=del(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Select(Message)
{
    const Post=select(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}

export async function Group(Message)

{
    const Post=group(Message)
    let response=await fetch(
        Post
    )
    return response.text()
}


export async function Get(Message)

{
    const get=Get(Message)
    let response=await fetch(
        get
    )
    return response.text()
}