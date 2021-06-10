import React,{useState, useEffect} from "react";
import Errormessage from "../Errormessage";
import Successmessage from "../Successmessage";
import axios from 'axios';
import google from '../../resources/google.png'
import styles from "./Form.module.css";

function Form({isotpverified ,setIsotpverified}) {
    const [showserverERR, setShowserverERR] = useState(false)
    const [showmess3, setshowmess3] = useState("NO")
   
    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName + " " + passObj.userPassword)
       
         axios.post('/login', {
         "username" : userName, "password" : passObj.userPassword
         })
        .then(function (response) {
          console.log(response)
            if(response.data.code)
            {
            setShowserverERR(response.data.code)
            setButtondisabled(true)
            setUserPassword({...passObj, userPassword: ""})
            setshowmess3("NO")
            }
            if(response.data.code === 3){
              setotpmode(true)
              setOtpmail(response.data.email)
              setServerOTP(response.data.otp)
              console.log(response.data.otp)
            }
         })
         .catch(function (error) {
           console.log(error);
         });
    }
  //  MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL
    const [buttondisabled, setButtondisabled] = useState(true)
    useEffect(() => { 
      if (showmess3 === true)
      setButtondisabled(false)
      else
      setButtondisabled(true)
  }, [showmess3])
  // MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL MAIN BUTTON CONTROL


   // USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME 
    const [userName, setUserName] = useState("")
    const [showmess1, setshowmess1] = useState(false)
    const [usernameError, setusernameError] = useState()
      useEffect(() => {
      function checkusername(){
      userName.length < 6 ? setusernameError("YES") : setusernameError("NO")
      }     
      checkusername();
      userName.length? setshowmess1(true): setshowmess1(false)}, [userName])
  // USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME  USERNAME USERNAME 



  // PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD 
     var [passObj,setUserPassword] = useState({
     userPassword : "",
     });
     const [showmess, setshowmess] = useState(false)
     const [passwordError, setpasswordError] = useState()
     useEffect(() => { 
      function checkpassword(){
        passObj.userPassword.length < 8 ? setpasswordError("YES") : setpasswordError("NO")
        }
       checkpassword();
        passObj.userPassword.length? setshowmess(true): setshowmess(false)}, [passObj.userPassword])
  // PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD  PASSWORD PASSWORD PASSWORD 

  //


  // OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP
      const [otpmode , setotpmode] = useState(false)
      const [otp, setOtp] = useState("")
      const [otpmail, setOtpmail] = useState()
      const [serverOTP, setServerOTP] = useState()
      const [otpERR, setotpERR] = useState(false)
      const [buttondisabledotp, setbuttondisabledotp] = useState(true)
      function handleSubmitotp(e){
        e.preventDefault();
        if(otp === serverOTP){
          setIsotpverified(true)
          window.location.href = '/home';
        }
        else{
          axios.delete('/logout').catch(err=> console.log(err))
          setotpERR(1)
          setTimeout(() => {
          window.location.reload();
          }, 3000);
        }
        // axios.post('/verifyotp',{"otp":otp})
        // .then(function (response) {
        //   console.log(response)
        //     if(response.data.code === 1)
        //     {
        //       setotpERR(1)
        //       setTimeout(() => {
        //         window.location.reload();
        //       }, 3000);  
        //     }
        //     else{
        //       window.location.href = '/home';
        //     }
        //  })
        //  .catch(function (error) {
        //    console.log(error);
        //  });
      }
      useEffect(() => {      
       function checkotp(){
        ((otp < 100000)||(otp > 999999)) ? setbuttondisabledotp(true) : setbuttondisabledotp(false)
      }
      checkotp(); }, [otp])
      
  // OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP OTP

  
  
  
  useEffect(() => { passwordError === "NO" && usernameError === "NO" ? setshowmess3(true): setshowmess3(false)}, [usernameError, passwordError])



    const handlegoogleSubmit= e => {
      e.preventDefault();
     //  axios.get('/auth/google').then(function(response){console.log(response)}).catch(function(err){console.log(err)})
     window.open("http://localhost:3763/auth/google" , "_self")
    }


    return (
       <div>
        <div className={styles.loginform}>
          <div style={{marginTop: "8%"}} className={styles.form__socialButton}>
                <div className={styles.socialButton} onClick={handlegoogleSubmit}>
                <img src={google} alt="google" />
                <p>Continue with Google</p>
                </div>                   
                </div>
                <div className={styles.seperator}>
            <div style={{marginTop: "7%"}} className={styles.seperator__text}>
                <hr />
                <span>or</span>
                <hr />
            </div>
            </div>
            <form action="" autoComplete="off">
          { !otpmode &&
            <div>   
            <div className={styles.inputField}>
            <input
            type="text"
            className="logininput"
            id="inlineFormInputGroup"
            placeholder="Username"
            value={userName} 
            onChange = {(e)=> {setUserName(e.target.value);}}
            />
            </div>
            {(usernameError==="YES") && (showmess1===true) && <Errormessage message={"Username must be Atleast 8 digits and not be an Email"}/>}     
            <div className={styles.inputField}>
            <input
                type="password"
                className="logininput"
                id="exampleInputPassword1"
                value={passObj.userPassword}
                placeholder="Password"
                onChange = {(e)=> {setUserPassword({...passObj, userPassword: e.target.value});}}
              />
            </div>
            {(passwordError==="YES") && (showmess===true) && <Errormessage message={"Password must be Atleast 8 digits"}/>}
            {(showmess3===true) && <Successmessage message={"Valid Inputs"}/>}

            {/* <div className="inputField">
            <input
                type="number"
                className=""
                id="exampleotp"
                value={otp}
                placeholder="Enter Otp"
                style ={{textAlign:"center"}}
                onChange = {(e)=> {setotp(e.target.value); setshowmess(true)}}
              />
            </div> */}
            {(showserverERR === 2) && <Errormessage message={"Incorrect Password"}/>}
            {(showserverERR === 1) && <Errormessage message={"Username Doesn't Exist"}/>}
            <button disabled={buttondisabled} type="submit" className={styles.button} onClick={handleSubmit}>
              Submit
            </button>         
            &nbsp; &nbsp;
            </div> }
            { otpmode &&
              <div>
            <div><p style={{color:'#0981f1', fontWeight:'600', textAlign:'center'}}>Credentials Verified. Enter Otp to <span style={{color:'white'}}>{otpmail}</span> to proceed</p> </div>
            <div className={styles.inputField}>
            <input
                type="tel"
                className="logininput"
                id="exampleInputPassword1"
                value={otp}
                placeholder="One Time Password"
                onChange = {(e)=> {setOtp(e.target.value)}}
              />
            </div>
            <button disabled={buttondisabledotp} type="submit" className={styles.button} onClick={handleSubmitotp}>
              Verify Otp
            </button>
            {otpERR===1 && <Errormessage message="Incorrect OTP. Retry Login.. Redirecting"></Errormessage>}
              </div>
            }
            </form>
            <a href="/register" style={{color:"#0981f1"}}> <p className='pt-2'>Not a user ? <span style={{color:"white"}}>  Register </span> here</p></a>
        </div>
            <div>
        </div>
        </div>
    )
}

export default Form;
