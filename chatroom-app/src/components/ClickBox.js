import React from "react"
import Button from "@material-ui/core/Button"

export default function ClickBox() {

    return (
        <div className="ClickBox">
            <p>
                <Button type="Button" variant="contained" size="small">关闭</Button>
                <Button type="Button" variant="contained" size="small">发送</Button>
            </p>
        </div>
    )
}
