import React from 'react'
import './Sideinfo.css'

function SideInfo({current_song}) {
    return (
        <div>
            <div id="div4">
            
            {/* <div>  <img id="current_logo" src="https://www.flaticon.com/svg/static/icons/svg/27/27112.svg"/> </div> */}
            
            <div>
               <h2 id="current_logo_title" className="fs-6 my-3"><marquee scrollamount="8">Currently Playing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently Playing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently Playing</marquee></h2>
            </div>
            <div id="currently_playing_details">
                <div>
        	        <img src={current_song.img} id="current_img"/> 
                </div>
                <p id="curr_name" className="mt-4 mb-0">{current_song.songName.length<=24?current_song.songName:current_song.songName.substr(0,24)+"..."}</p>
                <p id="artist_name" className="mt-0 fs-6">{current_song.artistName}</p>
            </div>
    </div>
    </div>
)
}
export default SideInfo
