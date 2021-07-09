import React from "react"
import "../globalStyle.css"

function Input(props) {
    const { name, value, onChange } = props

    return (

        <div className="text-input">
            <input name={name} value={value} type="text" onChange={onChange} />

        </div>
    )
}
export default Input
