import React from "react";
import "./checkout.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

function CheckoutPage({cartItems,cartTotal}) {
    return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div  className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem cartItem={item}/>)
        }
        <div className="total">TOTAL:${cartTotal}</div>
        <StripeCheckoutButton price={cartTotal} />
    </div>);
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);