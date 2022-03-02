import useElments from "../hooks/useElements";


export default function HandleMessage(Message){
    console.log(Message);
    return (
        <div className="Message">
            Message
        </div>
    )
}

export function GetMessages(name,index){
    
    const func=useElments(name)[4];
    let Element=func(name);
    return Element;
}