export default function connect()
{
    const data=fetch(
        "http://localhost:4000",
        {
            method:"get",
            mode:"no-cors"
        }
    )
    const js=data.json()
    console.log(js)
}