import React from "react";
import "./preview-item.scss";
function PreviewItem({name,price,imageUrl}) {
    return (
    <div className="preview-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="preview-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
    </div>);
}

export default PreviewItem;