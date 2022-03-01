import "../css/Ui.css"
import Button from '@mui/material/Button'
import HandleMessage from "../Tools/Handlemessage"

export default function ClickBox(){
    return (
        <div className='ClickBox'>
            <p>
                <Button type='Button' variant="contained" size="small" >关闭</Button>
                <Button type='Button' variant="contained" size="small" >发送</Button>
            </p>
        </div>
    )
}