import React from 'react'

function Errormessage(props) {
    return (
        <div>
           <p style={{color:'red'}}>{props.message}</p> 
        </div>
    )
}

export default Errormessage