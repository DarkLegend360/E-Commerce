import React, { Component } from "react";
import "./shop-page.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop-actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-container";
import CollectionsPageContainer from "../collection/collection-container";

class ShopPage extends Component {
    componentDidMount() {
        const {fetchCollectionStart} = this.props;
        fetchCollectionStart();
    }
    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
            </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);