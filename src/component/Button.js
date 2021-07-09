import React from "react";
import "../globalStyle.css";

function Button({ label, value, onClick }) {
    return (
        <button type="button" className="button" value={value} onClick={onClick} >
            {label}
        </button>
    )
}
export default Button
