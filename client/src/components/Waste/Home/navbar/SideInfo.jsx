import React from 'react'
import './Sideinfo.css'

function SideInfo({current_song}) {
    return (
        <div>
            <div id="div4">
            
            <div>  <img id="current_logo" src="https://www.flaticon.com/svg/static/icons/svg/27/27112.svg"/> </div>
            
            <div>
               <h2 id="current_logo_title">Currently Playing</h2>
            </div>
    
            <div id="currently_playing_details">
                <div>
        	        <img src={current_song.img} id="current_img"/> 
                </div>
                <p id="curr_name">{current_song.songName}</p>
                <p id="artist_name">{current_song.artistName}</p>
            </div>
    </div>
    </div>
)
}
export default SideInfo
