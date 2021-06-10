import React,{useState, useEffect} from "react";
import Errormessage from "../Errormessage";
import Successmessage from "../Successmessage";
import validator from 'validator';
import axios from 'axios';

function Register() {

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
        console.log(response);
      })
      .catch(function (error) {
        console.log("error");
      });
 }

 function checkmatch(){
     passObj.userPassword === passObj.userPassword2 ? setpassm("YES") : setpassm("NO");
 }
 function checkmail(){
     validator.isEmail(userEmail) ? setEmailError("NO") : setEmailError("YES")
      }
 function checkusername(){
        validator.isEmail(userName) ? setusernameError("YES") : setusernameError("NO")
         }      
 const handlegoogleSubmit= e => {
   e.preventDefault();
  //  axios.get('/auth/google').then(function(response){console.log(response)}).catch(function(err){console.log(err)})
  window.open("http://localhost:3763/auth/google" , "_self")
 }


 useEffect(() => { checkmatch() }, [passObj.userPassword, passObj.userPassword2])
 useEffect(() => { checkmail();}, [userEmail])
 useEffect(() => { checkusername();}, [userName])
 useEffect(() => { 
     if (EmailError==="NO" && passmatch === "YES" && userName.length && usernameError == "NO" && passObj.userPassword.length)
     setButtondisabled(false)
     else
     setButtondisabled(true)
 }, [EmailError, passmatch, userName])

  return (
    // <div style={{height:"100vh"}}>
    <div>
      <div className="row" style={{height:"30%"}}>
        <h1>REGISTER</h1>
        </div>  
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form autoComplete="off">
            <div className="form-group">
              <label htmlFor="inlineFormInputGroup">Username</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Username"
                  value={userName} 
                  onChange = {(e)=> setUserName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={userEmail}
                onChange = {(e)=> {setUserEmail(e.target.value);  setshowmess1(true);}}               
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            {showmess1 && EmailError==="YES" && <Errormessage message="Enter a Valid Email" />}
            {showmess1 && EmailError==="NO" && <Successmessage message="Valid Email" />}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={passObj.userPassword}
                onChange = {(e)=> {setUserPassword({...passObj, userPassword: e.target.value});}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword2">Confirm Password</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2"
                value={passObj.userPassword2}
                onChange = {(e)=> {setUserPassword({...passObj, userPassword2: e.target.value}); setshowmess(true)}}
              />
            </div>
            
            {showmess && passmatch==="NO" && <Errormessage message={"Passwords Do Not Match"}/>}
            {showmess && passmatch==="YES" && <Successmessage message={"Passwords Match"}/> }
          

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Wanna Join Our Mailing List?
              </label>
            </div>
            <button disabled={buttondisabled} type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-secondary" onClick={handlegoogleSubmit}>
              Google
            </button>
          </form>
          <a href="/login" style={{}}>Already Registered? Login Instead.</a>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Register;
