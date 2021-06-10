import React from 'react'
import './button.css'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function Button({ play, isPlaying, prevsong, nextsong }) {
  return (
    <div className='btn-container'>
      <SkipPreviousIcon className="prev_next" onClick={prevsong} src="https://img.icons8.com/nolan/64/home-buton.png" style={{fill:"orange"}}/>
      <div onClick={play} style={{fontSize:'10px'}}>
        {
          isPlaying ?  <PauseIcon style={{fill:"yellow"}}/>: <PlayArrowIcon style={{fill:"tomato"}}/>
        }
      </div>
      <SkipNextIcon className="prev_next" onClick={nextsong} src="https://img.icons8.com/nolan/64/circled-chevron-right.png" style={{fill:"orange"}}/>
    </div>
  )
}
export default Button