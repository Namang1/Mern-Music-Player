import React from 'react'
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Sideinfo from './SideInfo'

function Navbar({current_song}) {
    return (
        <>
        <div className="s-layout">
<div className="s-layout__sidebar">
  <a className="s-sidebar__trigger" href="#0">
     <MenuIcon style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
  </a>

  <nav className="s-sidebar__nav">
     <ul>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-home"> </i><em></em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" href="#0">
             <HomeIcon style={{color:"aqua"}}/><em>Home</em>
           </a>
        </li>        
        <li>
           <a className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" href="#0">
             <AccountBoxIcon style={{color:"aqua"}}/><em>My Profile</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" href="#0">
              <MusicNoteIcon style={{color:"aqua"}}/><em>songs</em></a>
        </li>
        <li>
           <a className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" href="#0">
           <MusicNoteIcon style={{color:"aqua"}}/><em>songs</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link d-flex align-items-center justify-content-between ps-4" href="#0">
           <MusicNoteIcon style={{color:"aqua"}}/><em>songs</em>
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
