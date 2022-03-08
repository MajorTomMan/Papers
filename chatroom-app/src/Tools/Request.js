
const MyHeaders=new Headers(
    {
        "Accept":"application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
)

export function post({id,message}){
    return new Request(
        'http://localhost:4000/',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({id:id,message:message})
        }
    )
}
export function POST({name,password}){
    return new Request(
        'http://localhost:4000/',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name,password:password})
        }
    )
}


export function get(){
    return new Request(
        'http://localhost:4000/',
        {
            method:"GET",
            headers:MyHeaders,
            cache:"default",
        }
    )
}