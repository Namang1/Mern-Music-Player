import React from 'react'
import "./musicList.css";
// import "../commoncss/style.css";
import MusicCard from "../musicCard/MusicCard";

function MusicList() {
    return (
        <>
        {/* <p className="para">Choose genre</p> */}
        <div className="musicList pt-4">
            <h1 className="pb-4 pt-4 fs-1 fw-bold">DISCOVER</h1>
            <div className="musicList__card__container">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            </div>
        </div>
        </>
    )
}

export default MusicList
