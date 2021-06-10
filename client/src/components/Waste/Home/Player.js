import { useState, useRef, useEffect } from 'react'
//import song from './Suncrown - Legend of the Forgotten Centuries.mp3'
// import song from './viva.mp3'
import Slider from './audioplayercomponents/slider/Slider'
import ControlPanel from './audioplayercomponents/controls/ControlPanel'



function Player({collection, current_song, setCurrent_song}) {

  const volstyle = {border:'none',
  // height:'10px',
  // width: '95%', 
  // boxShadow: 'none',
  // appearance: 'none',
  // height: '3px',
  // background: 'rgb(116, 52, 235)'
}
   
  const [percentage, setPercentage] = useState("0")
  const [volume, setvolume] = useState("1")
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [song, setSong] = useState(collection[current_song])
  
  const audioRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const onChangevol = (e) => {
    const audio = audioRef.current
    audio.volume = e.target.value
    setvolume(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  useEffect(() => {
    setSong(collection[current_song])
  }, [current_song]) 

  const prevsong = () => {
    const audio = audioRef.current
    if(current_song-1 === -1)
    setCurrent_song(collection.length-1)
    else
    setCurrent_song(current_song-1)
    setTimeout(() => {
      audio.play()
    }, 1000);
  }

  const nextsong = () => {
    const audio = audioRef.current
    if(current_song+1 === collection.length)
    setCurrent_song(0)
    else
    setCurrent_song(current_song+1)
    setTimeout(() => {
      audio.play()
    }, 1000);
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className="container-fluid">
    <div className="row">
    <div className='app-container col-sm-10'>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={song.song}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        prevsong={prevsong}
        nextsong={nextsong}
      />
    </div>
    <div className="col-sm-2 vol">
    <input
        type='range'
        className="volstyle"
        onChange={onChangevol}
        value={volume}
        step='0.1'
        min="0.0"
        max="1"
      />
    </div>
    </div>
    </div>
  )
}

export default Player