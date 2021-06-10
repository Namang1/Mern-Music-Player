import React from 'react';
import "./login.css"
import RightBody from "./RightBody"
import LeftBody from "./LeftBody"

function Login() {
    return (
        <div className="login row">
           <div className="login__left w-50 col-md-6">
                <LeftBody/>
            </div>
            <div className="login__right w-50 col-md-5">
                <RightBody/>
            </div>
        </div>
    )
}

export default Login
