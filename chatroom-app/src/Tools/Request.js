
import User from "../data/User.json"


const MyHeaders=new Headers(
    {
        "Accept":"application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
)

export const post=new Request(
    'http://localhost:4000/',
    {
        method:"POST",
        headers:MyHeaders,
        cache:"default",
        mode:"cors",
        body:JSON.stringify(User)
    }
)

export const get=new Request(
    'http://localhost:4000/',
    {
        method:"GET",
        headers:MyHeaders,
        cache:"default",
    }
)