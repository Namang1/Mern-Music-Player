import React from 'react';
import "./SignupLeftBody.css";
import Illustration from '../Illustration';
// import signupIllustration from "../resources/signup.svg";
//import signupIllustration from "../../resources/music.svg";
 import signupIllustration from "../../resources/disc.svg";

function SignupLeftBody() {
    return (
    <div className="signupLeftBody container-fluid h-100">
    <div className="row">
    <div className="col-xs-12">
    <div className="signup__text">
          <span style={{ i: 1 }}>S</span>
          <span style={{ i: 2 }}>i</span>
          <span style={{ i: 3 }}>g</span>
          <span style={{ i: 4 }}>n</span>&nbsp;
          <span style={{ i: 5 }}>Up</span>
        </div>
    <a href="/login"> <p className="pt-2">Already a user ? <span style={{color:"white"}}>  Sign In </span> here</p></a>
    </div>
    <Illustration src={signupIllustration} alt="signup" />
    </div>
    </div>
            
    )
}

export default SignupLeftBody
