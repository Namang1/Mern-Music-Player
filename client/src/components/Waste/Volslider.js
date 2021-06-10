import React,{useState} from 'react'

function Volslider({ volume = 1, onChangevol }) {
    return (
        <input
        style={{border:'none', height:'10px', width: '95%'}}
        type='range'
        onChange={onChangevol}
        value={volume}
        step='0.1'
        min="0.1"
        max="1"
      />

    )
}

export default Volslider
