import React from "react";
import "./cart-dropdown.scss";
import "../custom-button/custom-button";
import CustomButton from "../custom-button/custom-button";

const CartDropdown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;