import React,{useEffect,useState} from "react";
import "./musicList.css";
import MusicCard from "../musicCard/MusicCard"
import photos from './photos'
import punphotos from './punphotos'
import hinphotos from './hinphotos'
import genphotos from './genphotos'


function MusicList({listTitle, data, lang,setcollection ,current_song, setCurrent_song , audioRef, isPlaying ,setIsPlaying}) {
    var list = []

    for (let i = 0; i < data.length; i++) {
        list.push(<MusicCard key={data[i]._id} lang={lang} title={data[i].artistName} image={lang==="ENGLISH"?photos[data[i].sudoArtist]:lang==="PUNJABI"?punphotos[data[i].sudoArtist]:lang==="PLAYLIST"?punphotos[data[i].sudoArtist]:lang==="HINDI"?hinphotos[data[i].sudoArtist]:lang==="GENRE"?genphotos[data[i].sudoArtist]:""} text={data[i].artistName} data={data[i].songlist} setcollection={setcollection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}></MusicCard>);
    }

    return (
        <>
        <div className="musicList pt-4">
            <h1 className="pb-4 mt-0 fs-1 fw-bold">{listTitle}</h1>
            <div className="musicList__card__container">
            {
                list
            }
            </div>
        </div>
    </>
  );
}

export default MusicList;
