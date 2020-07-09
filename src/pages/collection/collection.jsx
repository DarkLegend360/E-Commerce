import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import PreviewItem from "../../components/preview-item/preview-item";


const CollectionPage = ({collection}) => {
    const {title,items} =collection;
    return (<div className="collections">
        <div className="title"><h2>{title}</h2></div>
        <div className="items">{items.map((item)=><PreviewItem key={item.id} item={item} />)}</div>
    </div>);
}

const mapStateToProps = (state,ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);