import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Home from './components/Home/Home'
import { BrowserRouter ,Route } from 'react-router-dom'

function App() {
  const [user, setuser] = useState({})
  const [isotpverified, setIsotpverified] = useState(false)

  useEffect(() => {
    axios.get('/getuser').then(response=>{setuser(response.data);}).catch(err=>console.log(err))
  },[]) 
  return (
    <div className="App">
      <BrowserRouter>
       <Route path="/" exact component={Signup}></Route>
       <Route path="/login"> <Login user={user} setuser={setuser} isotpverified={isotpverified} setIsotpverified={setIsotpverified}></Login></Route>
       <Route path="/home"> <Home user={user} isotpverified={isotpverified}></Home></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;