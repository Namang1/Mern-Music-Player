import React,{useState} from 'react'
import "./left.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

function Left() {
    const [isEnabled,setEnable] = useState(false);
        
        function enableAnimation(){
       const icon = document.getElementById("fav__icon");
       icon.style.animation = "popUp 1s ease-in-out";
       setEnable(isEnabled => !isEnabled);
    }
    return (
        <div className="left">
            <div className="left__image">
                <img src="https://images.unsplash.com/photo-1618853802485-be85de3d160f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" style={{height:"4rem",width:"4rem"}}/>
            </div>
            <div className="left__text">
                <a href="./">Never Stop</a>
                <a href="./">Clare Duan</a>
            </div>
            <div className="left__icons">
                 <FavoriteIcon className="left__icons__icon" style={{fill : isEnabled ? "#56CDD3" : "white" , animation : isEnabled ? "popUp .5s ease-in-out" : "none"}} onClick={enableAnimation} id="fav__icon" />
                 <PictureInPictureAltIcon/>
            </div>
        </div>
    )
}

export default Left
