import React from "react";
import "./collections-overview.scss";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop-selector";
import { connect } from "react-redux";
import Preview from "../preview/preview";

const CollectionsOverview = ({ShopItems}) =>(
    <div className="collections-overview">
        {ShopItems.map(({id,...otherProps})=><Preview key={id} {...otherProps}/>)}
    </div>
)


const mapStateToProps = createStructuredSelector({
    ShopItems:selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);