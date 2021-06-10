import React from 'react'
import "./mid.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import Range from "../Range/Range";

function Mid() {
    return (
        <div className="mid">
            <div className="mid__upper">
                <ShuffleIcon className="mid__upper__shuffleIcon"/>
                <SkipPreviousIcon/>
                <PlayCircleFilledIcon className="mid__upper__play"/>
                {/* <PauseCircleFilledIcon/> */}
                <SkipNextIcon/>
                <RepeatIcon/>
            </div>
            <div className="mid__lower">
               <Range/>
            </div>
        </div>
    )
}

export default Mid
