import React, { Component } from "react";
import "./shop-page.scss";
import SHOP_DATA from "./shop-data";
import Preview from "../../components/preview/preview";

class ShopPage extends Component {
    constructor() {
        super();
        this.state={ShopItems:SHOP_DATA};
    }
    render() {
        const {ShopItems} = this.state;
        return (<div>
            {ShopItems.map(({id,...otherProps})=><Preview key={id} {...otherProps}/>)}
        </div>);
    }
}

export default ShopPage;