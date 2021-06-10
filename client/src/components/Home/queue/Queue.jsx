import React from "react";
import "./queue.css";
import QueueCard from "./QueueCard";
import loginimg from "../../../resources/Loginimg.svg"

const Queue = ({title, disabled ,collection, user, current_song, setCurrent_song, audioRef, setIsPlaying}) => {
  return (
    <div className="main">
      {(user!=="" || (user==="" && !disabled)) &&
      <div className="Queue">
        <div className="Queue__list__heading">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className={disabled?"heading2":"ps-4 heading"}>{title}</h1>
            {/* <RefreshIcon style={{zIndex:'4', marginLeft:'70%', marginTop:"7%", border:'1px solid tomato' , color:"tomato"}}/> */}
          </div>
          <div className="queuelist">
          {collection.map((card,index) => (
            <QueueCard key={card._id} disabled={disabled} sid={card._id} index={index} likedby={card.likedby} user={user} setCurrent_song={setCurrent_song} isplayingl={index==current_song?true:false} artistName={card.artistName} songName={card.songName} img={card.img} audioRef={audioRef} setIsPlaying={setIsPlaying}/>
          ))}
          </div>
        </div>
      </div>
    }
    {
      disabled && user===""&&
      <div>
        <h3 className="heading"> Login To Proceed</h3>
        <img src={loginimg}></img>
      </div>
    }
    </div>
  );
};

export default Queue;
