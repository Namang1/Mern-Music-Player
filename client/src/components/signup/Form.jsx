import React,{useState, useEffect} from "react";
import Errormessage from "../Errormessage";
import Successmessage from "../Successmessage";
import validator from 'validator';
import axios from 'axios';
import google from '../../resources/google.png'
import "./SForm.css";
import Fade from "react-reveal/Fade";

function Form() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    var [passObj,setUserPassword] = useState({
       userPassword : "",
       userPassword2:"",
     });
    const [passmatch, setpassm] = useState("NO")
    const [buttondisabled, setButtondisabled] = useState(true)
    const [showmess, setshowmess] = useState()
    const [showmess1, setshowmess1] = useState()
    const [EmailError, setEmailError] = useState("NO")
    const [showserverERR, setShowserverERR] = useState(false)
    const [usernameError, setusernameError] = useState("NO")
   
    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName + " " + passObj.userPassword + " " + passObj.userPassword2 + " " + userEmail)
       //  var headers = {
       //     'Content-Type': 'application/json;charset=UTF-8',
       //     'Access-Control-Allow-Origin': '*'
       // };
       
        axios.post('/register', {
        "username" : userName, "pass" : passObj.userPassword, "email" : userEmail
        })
         .then(function (response) {
           if(response.data.code)
           //window.location.reload()
           setShowserverERR(response.data.code)
           setusernameError("NO")
           setEmailError("NO")
           setpassm("NO")
           setButtondisabled(true)
           setshowmess()
           setshowmess1()
           setUserName("")
           setUserEmail("")
           setUserPassword({...passObj, userPassword: "" , userPassword2: ""})
         })
         .catch(function (error) {
           console.log("error");
         });
    }
    
    const handlegoogleSubmit= e => {
      e.preventDefault();
     //  axios.get('/auth/google').then(function(response){console.log(response)}).catch(function(err){console.log(err)})
     window.open("http://localhost:3763/auth/google" , "_self")
    }
   
   
    useEffect(() => { 
      function checkmatch(){
        passObj.userPassword === passObj.userPassword2 ? setpassm("YES") : setpassm("NO");
    }
    checkmatch(); }, [passObj.userPassword, passObj.userPassword2])

    useEffect(() => { 
      function checkmail(){
        validator.isEmail(userEmail) ? setEmailError("NO") : setEmailError("YES")
         }
      checkmail();}, [userEmail])

    useEffect(() => { 
      function checkusername(){
        validator.isEmail(userName) ? setusernameError("YES") : setusernameError("NO")
         }  
      checkusername();}, [userName])

    useEffect(() => { 
        if (EmailError==="NO" && passmatch === "YES" && userName.length && usernameError === "NO" && passObj.userPassword.length)
        setButtondisabled(false)
        else
        setButtondisabled(true)
    }, [EmailError, passmatch, userName, passObj.userPassword, usernameError])

    return (
        <div className="form">
          <div style={{marginTop: "8%"}} className="form__socialButton">
                <div className="socialButton" onClick={handlegoogleSubmit}>
                <img src={google} alt="google" />
                <p>Continue with Google</p>
                </div>                   
                </div>
                <div className="seperator">
            <div style={{marginTop: "7%"}} className="seperator__text">
                <hr />
                <span>or</span>
                <hr />
            </div>
            </div>
            <form action="" autoComplete="off">
            <Fade top>    
            <div className="inputField">
            <input
            type="text"
            className=""
            id="inlineFormInputGroup"
            placeholder="Username"
            value={userName} 
            onChange = {(e)=> setUserName(e.target.value)}
            />
            </div>
            </Fade>
            <Fade left>               
            <div className="inputField">
            <input type="text" autoComplete="off" className="" placeholder="Email" value={userEmail} onChange = {(e)=> {setUserEmail(e.target.value);  setshowmess1(true);}}/>
            </div>
            </Fade>
            {showmess1 && EmailError==="YES" && <Errormessage message="Enter a Valid Email" />}
            {showmess1 && EmailError==="NO" && <Successmessage message="Valid Email" />}
            <Fade right>
            <div className="inputField">
            <input
                type="password"
                className=""
                id="exampleInputPassword1"
                value={passObj.userPassword}
                placeholder="Password"
                onChange = {(e)=> {setUserPassword({...passObj, userPassword: e.target.value});}}
              />
            </div>
            </Fade>
            <Fade bottom>
            <div className="inputField">
            <input
                type="text"
                className=""
                id="exampleInputPassword2"
                value={passObj.userPassword2}
                placeholder="Confirm Password"
                onChange = {(e)=> {setUserPassword({...passObj, userPassword2: e.target.value}); setshowmess(true)}}
              />
            </div> 
            </Fade>           
            {showmess && passmatch==="NO" && <Errormessage message={"Passwords Do Not Match"}/>}
            {showmess && passmatch==="YES" && <Successmessage message={"Passwords Match"}/> }
            {(showserverERR === 2) && <Errormessage message={"Username Already Exists! Login Instead"}/>}
            {(showserverERR === 1) && <Errormessage message={"Email Already Exists! Login Instead"}/>}
            {(showserverERR === 3) && <Successmessage message={"New User Created Succesfully. Login Now!"}/>}
            {/* <div className="button">
            <input type="submit" value="Register" />
            </div> */}
            <button disabled={buttondisabled} type="submit" className="button" onClick={handleSubmit}>
              Submit
            </button>
            &nbsp; &nbsp;
            </form>
        </div>
    )
}

export default Form;
