var React=require('react');

function Handle(data){
    return React.createElement(
        "div",
        {
            className:"Message"
        },
        [
            data.name?data.name:'',
            data.id?data.id:'',
            data.message?data.message:''
        ]
    )
}


module.exports=Handle;