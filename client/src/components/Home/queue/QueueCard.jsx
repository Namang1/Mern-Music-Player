import React,{useState,useEffect} from "react";
import Heart from "react-heart"
import "./queueCard.css";
import axios from 'axios'

const QueueCard = ({index, sid, disabled, setCurrent_song, user ,isplayingl, likedby, artistName, songName, img, audioRef, setIsPlaying}) => {
  const handlequeueclick = () => {
    const audio = audioRef.current
    setCurrent_song(index);
    setTimeout(() => {
      audio.play()
    }, 1000);
    setIsPlaying(true)
  }

  const [liked, setLiked] = useState(false)
  useEffect(() => {
    if(likedby.includes(user._id)){
      setLiked(true)
    }
  }, [])  
  
  const handlelike = () => {
    if(!liked){
      console.log("IN LIKED")
      axios.post('/like', {"sid" : sid, "uid" : user._id}).catch(err => {console.log(err)})
      axios.post('/likeuser', {"sid" : sid, "uid" : user._id}).catch(err => {console.log(err)})
    }
    else{
      console.log("IN REMOVE LIKED")
      axios.post('/removelike', {"sid" : sid, "uid" : user._id}).then(response => {console.log("Removed Like")}).catch(err => {console.log(err)})     
      axios.post('/removelikeuser', {"sid" : sid, "uid" : user._id}).then(response => {console.log("Removed Like")}).catch(err => {console.log(err)})     
    
    }
  }
  const donothing = () => {
    console.log("THIS DOES NOTHING")
  }
  
  return (
    // <div className="queue__card px-3 my-4 rounded-3 animate__animated animate__swing">
    <div className={disabled?"queue__card px-3 ms-4 my-4 rounded-3 animate__animated animate__rubberBand":isplayingl?"queue__card px-3 ms-4 my-4 rounded-3 animate__animated animate__rubberBand active":"queue__card px-3 ms-4 my-4 rounded-3 animate__animated animate__rubberBand"} onClick={disabled?console.log('donothing'):handlequeueclick}>
      <div className="queue__card__img">
        <img src={img} className="rounded-1" />
      </div> 
      <div className="queue__card__content">
        <h1 className="fs-4 queueartist text-end">{artistName}</h1>
        <p className="fs-6 queuesong text-end">{songName}</p>
        <div className="fs-4 queueartist text-end" style={{ width: "1rem" , float: 'right' }}> 
        <Heart isActive={liked} animationDuration = {0.8} animationScale={1.5} inactiveColor="orange" className="likedbutton" activeColor="tomato" style = {{float : "right"}} onClick={disabled || user===""?(e) =>{console.log('donothing')}:(e) => {handlelike(); setLiked(!liked);}}/>
        </div>
      </div>
    
    </div>
  );
};

export default QueueCard;
