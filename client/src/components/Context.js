import React, { createContext, useState } from 'react'

export const myContext = createContext();
function Context(props) {

const [userObj, setUserObj] = useState();
    return (
        <div>
            <myContext.Provider value={userObj}>{props.children}</myContext.Provider>
        </div>
    )
}

export default Context
