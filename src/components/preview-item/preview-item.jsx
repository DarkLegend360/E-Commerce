import React from "react";
import "./preview-item.scss";
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
function PreviewItem({item,addItem}) {
    const {name,price,imageUrl}=item;
    return (
    <div className="preview-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="preview-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        <CustomButton style={{position:"absolute",top:250}} inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
    </div>);
}

const mapDispatchToProps = dispatch=> ({
    addItem:item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(PreviewItem);