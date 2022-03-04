export default function connect(data)
{
    let response=null
    fetch(
        'http://localhost:4000/',
        {
            method:"POST",
            headers:new Headers(
                {
                    "Accept":"application/json",
                }
            ),
            body:{
                data:{
                    x:6,
                    y:6
                }
            }
        }
    )
    .then(res=>res.text())
    .then(
        (data)=>{
            console.log(data)
            return response=data
        }
    )
    .catch(console.error)
    return null;
}