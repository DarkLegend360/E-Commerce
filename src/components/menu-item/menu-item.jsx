import React from "react";
import "./menu-item.scss";
function MenuItem({title,imgURL,size}) {
    return (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${imgURL})`}}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="Subtitle">SHOP NOW</span>
        </div>
    </div>);
}

export default MenuItem;