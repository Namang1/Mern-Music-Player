import React from 'react';
import "./RightBody.css";

function LoginLeftBody() {
    return (
        <div style={{paddingTop:"25%"}} className="loginRightBody ps-2 h-100">
           <div className="form m-auto">
            <form action="">
            <div className="inputField w-100">
            <input type="email" placeholder="Enter Your Email Address"/>
            </div>
            <div className="inputField">
            <input type="'password" placeholder="Enter Password"/>
            </div>
            <div className="button">
            <input type="submit" value="Sign In" />
            </div>
            </form>
        </div>
        </div>
    )
}

export default LoginLeftBody;
