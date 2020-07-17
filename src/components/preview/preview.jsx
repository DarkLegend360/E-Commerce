import React from "react";
import PreviewItem from "../preview-item/preview-item";
import "./preview.scss";
import { Link } from "react-router-dom";

function Preview({title,items}) {
    return (
        <div className="col-preview">
            <Link to={`/shop/${title.toLowerCase()}`}><h1 className="title">{title}</h1></Link>
            <div className="preview">
                {items.filter((item,idx)=> idx<4).map((item)=><PreviewItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
}

export default Preview;