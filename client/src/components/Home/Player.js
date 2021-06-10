import { useState, useEffect } from 'react'
//import song from './Suncrown - Legend of the Forgotten Centuries.mp3'
// import song from './viva.mp3'
import Slider from './audioplayercomponents/slider/Slider'
import ControlPanel from './audioplayercomponents/controls/ControlPanel'
import "./player.css"


function Player({chn,setchn, collection, current_song, setCurrent_song, audioRef, isPlaying, setIsPlaying}) {

  const volstyle = {
  // height:'10px',
   width: '50%',
  // boxShadow: 'none',
  // appearance: 'none',
  // height: '3px',
  // background: 'rgb(116, 52, 235)'
}

  const [collectionlocal, setcollectionlocal] = useState(collection)
  const [percentage, setPercentage] = useState("0")
  const [volume, setvolume] = useState("1")
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [song, setSong] = useState(collectionlocal[current_song])

  useEffect(() => {
    setcollectionlocal(collection)
    prevsong()
    nextsong()
  }, [collection])
  

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
    setCurrent_song(current_song)
    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  // useEffect(() => {
  //   console.log(chn)
  //   setSong(collectionlocal[1])
  //   if(chn===1)
  //   intermediate()
  // }, [chn])

  useEffect(() => {
    prevsong()
    nextsong()
    const audio = audioRef.current
    setTimeout(() => {
      audio.pause()  
    }, 1000);
    setIsPlaying(false)  
  }, [])

  // const intermediate = () => {
  //   setCurrent_song(1)
  //   prevsong()
  //   setchn(false)
  // }

  useEffect(() => {
    setSong(collectionlocal[current_song])
    console.log("SONG CHANGED", current_song)
  }, [current_song]) 

  const prevsong = () => {
    console.log("CALLing prev", current_song)
    const audio = audioRef.current
    if(current_song-1 === -1)
    setCurrent_song(collectionlocal.length-1)
    else
    setCurrent_song(current_song-1)
    setTimeout(() => {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          console.log("playing audio")
        })
        .catch(error => {
          console.log("REQUEST Interrupted. AJ")
        });}
    }, 500);
    setIsPlaying(true)
    console.log("PREV CALLED", current_song)
  }

  const nextsong = () => {
    const audio = audioRef.current
    if(current_song+1 === collectionlocal.length)
    setCurrent_song(0)
    else
    setCurrent_song(current_song+1)
    setTimeout(() => {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          console.log("playing audio")
        })
        .catch(error => {
          console.log("REQUEST Interrupted. AJ")
        });}
    }, 500);
    setIsPlaying(true)
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className="container-fluid player p-0">
    <div className="row">
    <div className='app-container col-sm-10'>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        onEnded={nextsong}
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
        style={volstyle}
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