import React from 'react'
import './Topinfo.css'

function Topinfo({current_song}) {
    return (
        <div>
            <div id="topinfodiv">
            
            <div id="top_current_logo_div">  <img id="top_current_logo" src="https://www.flaticon.com/svg/static/icons/svg/27/27112.svg"/> </div>
            
            <div>
               <h2 id="top_current_logo_title">Currently Playing</h2>
            </div>
    
            <div id="top_currently_playing_details">
                <div>
        	        <img src={current_song.img} id="top_current_img"/> 
                </div>
                <p id="top_curr_name">{current_song.songName}</p>
                <p id="top_artist_name">{current_song.artistName}</p>
            </div>
    </div>
        </div>
    )
}

export default Topinfo
