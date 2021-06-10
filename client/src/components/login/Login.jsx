import React,{useEffect} from 'react';
import "../css/Body.css";
import LeftBody from "./LoginLeftBody";
import Form from "./Form"
import axios from 'axios';

function Login({user, setuser, isotpverified, setIsotpverified}) {
    const handleLogin = () =>{
        window.location.href = '/home';
      }
      useEffect(() => {
        axios.get('/getuser').then(response=>{if(response.data==="")setuser="";}).catch(err=>console.log(err))
      },[])     
    if (user==="")
    {
    return (
        <div>
            <div className="container-fluid p-0">
            <div className="row">
            <div className="col-lg-5 left">
                <LeftBody/>
            </div>
            <div className="col-lg-7 right">
                 <Form isotpverified={isotpverified} setIsotpverified={setIsotpverified}/>
            </div>
            </div>
            </div> 
        </div>
    )
    }
    else
    {
        return (
            <div>
                <center>
                <div style={{display:'block'}}>
            <h3 className="ps-4 heading">You Are Already logged in with user: {user.username}</h3>
            </div>
            </center>
            <center>
            <div style={{display:'block', marginTop:'250px'}}>
            <button className="" style={{backgroundColor:'orange',fontWeight:'800',color:'black', borderRadius:'5px',border:'none',fontSize:'1.5rem'}} onClick={handleLogin}>Go To Home</button>
        </div>
        </center>
        </div>
        )
    }
}

export default Login
