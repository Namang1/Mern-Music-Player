import React from 'react'
import "./musicCard.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function MusicCard({title, image, text}) {
    return (
        <div className="musicCard">
            <CardActionArea className="musicCard__area">
            <Card className="musicCard__card">
                <div className="musicCard__image__container">
                <CardMedia className="musicCard__image" title={title} image={image}></CardMedia>
                    <PlayCircleFilledIcon className="musicCard__icon"/>
                </div>
                    <CardContent className="musiccard__content">
                    <Typography gutterBottom variant="h5" component="h3" className="text-center fs-5">
                        {text}
                    </Typography>
                    {/* <Typography variant="body2" component="p" className="musicCard__subTitle">
                    abcd
                    </Typography> */}
                    </CardContent>
               
            </Card>
            </CardActionArea>
        </div>
    )
}

export default MusicCard
