import React from "react";
import "./musicCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import axios from 'axios';

function MusicCard({title, image, lang, text, data, setcollection, setCurrent_song, audioRef, isPlaying, setIsPlaying}) {
    const handlecardclick = () => {
        if (lang==="ENGLISH")
        axios.post('/getartistsongs',{ids : data}).then(response=>{console.log(response); handlechange(response.data)}).catch(err => console.log(err))
        else if (lang === "PUNJABI")
        axios.post('/getpunartistsongs',{ids : data}).then(response=>{console.log(response); handlechange(response.data)}).catch(err => console.log(err))
        else if (lang === "PLAYLIST")
        axios.post('/getplaylistsongs',{ids : data}).then(response=>{console.log(response); handlechange(response.data)}).catch(err => console.log(err))
        else if (lang === "HINDI")
        axios.post('/gethinsongs',{ids : data}).then(response=>{console.log(response); handlechange(response.data)}).catch(err => console.log(err))  
        else if (lang === "GENRE")
        axios.post('/getgensongs',{ids : data}).then(response=>{console.log(response); handlechange(response.data)}).catch(err => console.log(err))                
    }
    const handlechange = (data) => {
        const audio = audioRef.current
        setcollection(data)
        setCurrent_song(0)
        setTimeout(() => {
          audio.play()
        }, 1000);
        setIsPlaying(true)
    }
    return (
        <div className="musicCard">
            <CardActionArea className="musicCard__area">
            <Card onClick={handlecardclick} className="musicCard__card">
                <div className="musicCard__image__container">
                <CardMedia className="musicCard__image" title={title} image={image}></CardMedia>
                    <PlayCircleFilledIcon className="musicCard__icon"/>
                </div>
                    <CardContent className="musiccard__content">
                    <p className="text-left card_title"> 
                    {text} </p>
                        {/* <p className="musiccard__content__text">10k +Total songs</p> */}
                    </CardContent>
               
            </Card>
            </CardActionArea>
        </div>
    )
}

export default MusicCard;
