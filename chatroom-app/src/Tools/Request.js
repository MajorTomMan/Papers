
import User from "../data/User.json"


const MyHeaders=new Headers(
    {
        "Accept":"application/json",
    }
)

export const post=new Request(
    'http://localhost:4000/',
    {
        method:"POST",
        headers:MyHeaders,
        cache:"default",
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