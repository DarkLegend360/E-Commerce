import React from "react";
import "./menu-item.scss";
import {withRouter} from "react-router-dom"
function MenuItem({title,imgURL,size,history,match}) {
    return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`/shop/${title}`)}>
        <div className="background-image" style={{backgroundImage: `url(${imgURL})`}}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="Subtitle">SHOP NOW</span>
        </div>
    </div>);
}

export default withRouter(MenuItem);//history.push(`${match.url}${title}`)}>