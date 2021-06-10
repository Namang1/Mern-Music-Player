import React,{useEffect,useState,useRef} from 'react';
import "./css/Body.css";
import axios from 'axios';

function Home(props) {

//  const [username, setUsername] = useState("")
//  const [rap, setrap] = useState("")
//  const [music, setmusic] = useState("")
//  music.ontimeupdate = function () { seekbar.value = music.currentTime }

const [source, setSource] = useState("")

useEffect(() => {
    axios.get('./link')
    .then((response)=>{console.log(response)})
    .catch(err => {console.log(err)})
},[])


const audio = new Audio();
const music = useRef(audio);
audio.src = {source};

const [seekbarval, setseekbarval] = useState(0.0)
const handleSeekBar = function () {console.log(seekbarval)}
useEffect(() => {
    console.log(seekbarval, music.current.duration, parseInt((seekbarval*(music.current.duration))))
    music.current.currentTime =  seekbarval; 
}, [seekbarval])


const hanleplay = () => {
music.current.play()
}
//music.currentTime =  seekbarval ; 

// const logoutb = ()=>{
//     console.log("Log Out req(client)")
//     axios.get("/logout")
//     window.location.href = '/login';
//}   
    
    return (
            <div className="music_player" id="music_player">
             {/* <div class="controls">
                        <span class="material-icons" onclick="prev_song()" id="change">fast_rewind</span>
                         <span class="play" onclick="handlePlay()">
                         <i class="material-icons">play_arrow</i>
                         </span>
                        <span class="material-icons" onclick="next_song()" id="change">fast_forward</span>
                    </div> */}
        
             <div className="seek">
             <span className="current-time">0:0</span>      
             <input type="range" step="0.01" className="seekbar" value={seekbarval} min="0" max='100' onInput={e=> {setseekbarval(e.target.value)}}/>
             
             <button onClick={hanleplay}></button>         
             <span className="duration"> 0:0</span>
           </div>
         </div> 
    )
}
export default Home


            {/* <div className="col-lg-7 right">
                 <h1>Logged In With User - {username}</h1>
                 <button onClick={logoutb}> LOGOUT YOU piece OF SHIT {username} </button>
            </div> */}