import React from 'react'
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LangIcon from '@material-ui/icons/Language';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Sideinfo from './SideInfo'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RadioIcon from '@material-ui/icons/Radio';

function Navbar({current_song, mode, setmode}) {
   const handlehome = () => {
      if (mode!=="HOME")
      setmode("HOME")
   }
   const handlehomequeue = () => {
      if (mode!=="QUEUE")
      setmode("QUEUE")
   }
   const handleprofile = () => {
      if (mode!=="PROFILE")
      setmode("PROFILE")
   }    
   const handlehomeliked = () => {
      if (mode!=="LIKED")
      setmode("LIKED")
   }    
   const handlelangliked = () => {
      if (mode!=="LANGUAGE")
      setmode("LANGUAGE")
   }   
   const handleshare = () => {
      if (mode!=="SHARE")
      setmode("SHARE")
   }           
    return (
        <>
        <div className="s-layout">
<div className="s-layout__sidebar">
  <a className="s-sidebar__trigger" >
     <MenuIcon style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
  </a>

  <nav className="s-sidebar__nav">
     <ul>
        <li className={mode==="HOME"?"active":""}>
           <a onClick={handlehome} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4">
             <HomeIcon style={{color:"#f6d365"}}/><em>Home</em>
           </a>
        </li>        
        <li className={mode==="PROFILE"?"active":""}>
           <a onClick={handleprofile} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" >
             <AccountBoxIcon style={{color:"#f6d365"}}/><em>My Profile</em>
           </a>
        </li>
        <li className={mode==="QUEUE"?"active":""}>
           <a onClick={handlehomequeue} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" >
              <MusicNoteIcon style={{color:"#f6d365"}}/><em>Queue</em></a>
        </li>
        <li className={mode==="LIKED"?"active":""}>
           <a onClick={handlehomeliked} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" >
           <FavoriteBorderIcon style={{color:"#f6d365"}}/><em>Liked</em>
           </a>
        </li>
        <li className={mode==="LANGUAGE"?"active":""}>
           <a onClick={handlelangliked} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" >
           <LangIcon style={{color:"#f6d365"}}/><em>Languages</em>
           </a>
        </li>
        <li className={mode==="SHARE"?"active":""}>
           <a onClick={handleshare} className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4">
             <RadioIcon style={{color:"#f6d365"}}/><em>CHÖIR</em>
           </a>
        </li>         
        <li>     <Sideinfo current_song={current_song}></Sideinfo></li>
     </ul>
  </nav>
</div>
</div>
        </>
    )
}

export default Navbar
