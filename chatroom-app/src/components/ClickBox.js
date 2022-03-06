import React from "react"
import Button from "@material-ui/core/Button"

export default function ClickBox({input}) {
    return (
        <div className="ClickBox">
            <p>
                <Button type="button" variant="contained" size="small">关闭</Button>
                <Button type="submit" variant="contained" size="small">发送</Button>
            </p>
        </div>
    )
}
