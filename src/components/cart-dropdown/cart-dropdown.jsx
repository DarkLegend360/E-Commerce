import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.scss";
import "../custom-button/custom-button";
import {withRouter} from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems} from "../../redux/cart/cart-selectors";
import {toggleCartHidden} from "../../redux/cart/cart-actions";
import {createStructuredSelector} from "reselect";
const CartDropdown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length?
            cartItems.map(item=> <CartItem key={item.id} item={item} /> )
            :<span className="empty-msg">Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={()=>{
            history.push("/checkout");
            dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));