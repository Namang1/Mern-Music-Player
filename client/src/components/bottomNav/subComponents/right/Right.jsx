import React from 'react'
import "./right.css";
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ComputerIcon from '@material-ui/icons/Computer';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

function Right() {
    return (
        <div class="right">
            <AudiotrackIcon/>
            <QueueMusicIcon/>
            <ComputerIcon/>
            <VolumeUpIcon/>
            <input type="range"/>
        </div>
    )
}

export default Right
