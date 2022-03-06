var React=require('react');

function Handle({message}){
    return React.createElement(
        "div",
        {
            className:"Message"
        },
        message
    )
}


module.exports=Handle;