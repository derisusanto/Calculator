import React from "react"
import "../globalStyle.css"

function Input(props) {
    const { name, value, onChange } = props

    return (
        <div className="text-input">
            <input type="checkbox" name={name} value={value} onChange={onChange} />
        </div>
    )
}
export default Input
