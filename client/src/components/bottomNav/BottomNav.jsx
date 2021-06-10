import React from 'react';
import "./bottomNav.css";
import Left from "./subComponents/left/Left";
import Right from "./subComponents/right/Right";
import Mid from "./subComponents/mid/Mid";

function BottomNav() {
    return (
        <div className="bottomNav">
            <Left />
            <Mid />
            <Right />
        </div>
    )
}

export default BottomNav
