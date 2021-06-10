 import React from 'react'
 function Seekbar(props) {
     console.log("REREHERE")
     return (
         <div>
             <input type="range" step="1" className="seekbar" value={props.seekbarval} min="0" max={props.seekbarmax} onInput={e=> {props.setseekbarval(e.target.value); console.log("RANGE CHANGED")}}/>
         </div>
     )
 }
 
 export default Seekbar
 