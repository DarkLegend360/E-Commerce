import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token=>{
    console.log(token);
}


const StripeCheckoutButton = props => {
    const showPrice = props.price *100;
    const apiKey = "pk_test_51H3HkKKXi4nqphuIHOgaOmTN35KssQmOF91OlUOZJTLgKsv91ZHk030JbQHWWhSoxoyVOqeMNei3tOYz4oCwvLil00D0ytOwWO";
    return (<StripeCheckout 
        label="Pay Now"
        name="Build Your Pc"
        billingAddress
        shippingAddress
        description={`Your Total is $ ${props.price}`}
        amount={showPrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={apiKey}
    />)
}

export default StripeCheckoutButton;