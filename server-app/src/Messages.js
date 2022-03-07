var React=require('react');

function Handle({message}){
    if(JSON.stringify(message)!=='{}'&&JSON.stringify(message)!==''){
        console.log("TTT")
        return React.createElement(
            "div",
            {
                className:"Message"
            },
            message
        )
    }
    else{
        console.log("FFF")
        return null;
    }
}


module.exports=Handle;