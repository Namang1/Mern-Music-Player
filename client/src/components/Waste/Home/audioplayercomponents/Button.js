import React from 'react'
import './button.css'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function Button({ play, isPlaying, prevsong, nextsong }) {
  return (
    <div className='btn-container'>
      <img className="prev_next" onClick={prevsong} src="https://img.icons8.com/nolan/64/home-buton.png"/>
      <div onClick={play} style={{fontSize:'10px'}} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
      <img className="prev_next" onClick={nextsong} src="https://img.icons8.com/nolan/64/circled-chevron-right.png"/>
    </div>
  )
}
export default Button
