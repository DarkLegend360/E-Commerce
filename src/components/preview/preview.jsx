import React from "react";
import PreviewItem from "../preview-item/preview-item";
import "./preview.scss";
function Preview({title,items}) {
    return (
        <div className="col-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item,idx)=> idx<4).map(({id,...otherProps})=><PreviewItem key={id} {...otherProps}/>)}
            </div>
        </div>
    );
}

export default Preview;