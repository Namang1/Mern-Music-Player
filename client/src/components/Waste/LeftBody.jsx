import React from 'react';
import "./LeftBody.css";
import Illustration from '../Illustration';
import signupIllustration from "../../resources/login.svg";

function LoginRightBody() {
    return (
        <>
                <div className="loginLeftBody h-100 w-100">
                    <h1>Sign In</h1>
                    <Illustration src={signupIllustration} alt="signup" className="ms-6" />
                </div>
            
        </>
    )
}

export default LoginRightBody
