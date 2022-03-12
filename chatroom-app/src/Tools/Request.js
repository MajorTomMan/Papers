
const MyHeaders=new Headers(
    {
        "Accept":"application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
)

export function del({name}){
    return new Request(
        'http://localhost:4000/Delete',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name})
        }
    )
}
export function insert({name,password,lastname,firstname}){
    return new Request(
        'http://localhost:4000/Insert',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name,password:password,lastname:lastname,firstname:firstname})
        }
    )
}
export function update({name,password}){
    return new Request(
        'http://localhost:4000/Update',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name,password:password})
        }
    )
}
export function select({name}){
    return new Request(
        'http://localhost:4000/Select',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name})
        }
    )
}
export function group({name,message,time}){
    return new Request(
        'http://localhost:4000/Group',
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name,message:message,time:time})
        }
    )
}


export function query(){
    return new Request(
        'http://localhost:4000/Group',
        {
            method:"GET",
            headers:MyHeaders,
            cache:"default",
        }
    )
}