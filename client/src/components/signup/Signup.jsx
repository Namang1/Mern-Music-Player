import React from 'react';
import "../css/Body.css";
import LeftBody from "./SignupLeftBody";
import Form from "./Form"

function Signup() {
    return (
            <div className="container-fluid p-0">
            <div className="row">
            <div className="col-lg-5 left">
                <LeftBody/>
            </div>
            <div className="col-lg-7 right">
                 <Form/>
            </div>
            </div>
            </div>
    )
}

export default Signup
