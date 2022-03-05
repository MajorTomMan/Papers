export default function handle(element,{Data}){
    if(Data){
        return null;
    }
    if(Data.type){
        element.type=Data.type;
    }
    if(Data.props){
        if(Data.props.className){
            element.className=Data.props.className;
        }
        if(Data.props.children){
            element.children=Data.props.children;
        }
    }
}