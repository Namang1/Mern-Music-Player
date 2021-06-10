import React from 'react';
import "./LoginLeftBody.css";
// import signupIllustration from "../resources/signup.svg";
//import signupIllustration from "../../resources/music.svg";
import login from '../../resources/login.svg'

function SignupLeftBody() {
    return (
    <div className="loginleftbody h-100">
    <img id="img" src={login} alt={login} />    
    <div id="content">
    <h1>Login</h1>
    <p className="ptt-2">Enter the realm of Harmony</p>
    </div>
    </div>
            
    )
}

export default SignupLeftBody
