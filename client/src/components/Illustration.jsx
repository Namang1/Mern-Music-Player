import React from 'react';
import "./css/Illustration.css";

function Illustration({src, alt}) {
    return (
    <div className="signupLeftBody__illustration">
        <img src={src} alt={alt}/> 
    </div>
    )
}


export default Illustration

