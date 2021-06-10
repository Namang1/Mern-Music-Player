import React from 'react'
import "./range.css";

function Range() {
    return (
        <div className="range">
            <p>0:00 </p>
            <input type="range" max="100" min="0"></input>
            <p>4:30</p>
        </div>
    )
}

export default Range
