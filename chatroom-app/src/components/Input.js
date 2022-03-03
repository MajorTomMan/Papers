import { useInput } from "@mui/base";


export default function Input(){
    const [Input,resetInput]=useInput("")
    const submit=event=>{
        event.preventDefault();
        console.log(Input)
        resetInput()
    }

}