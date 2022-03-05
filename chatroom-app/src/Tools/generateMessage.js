export default function handle(element,{Data}){
    if(!Data){
        return null;
    }
    if(Data.type){
        element.type=Data.type;
    }
    if(Data.props){
        element.props=Data.props
    }
}