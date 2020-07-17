import React, { Component } from "react";
import "./shop-page.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    constructor() {
        super();
        this.state={
            loading:true
        }
    }
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
        //     const collectionMap = convertSnapshotToMap(snapShot);
        //     updateCollections(collectionMap);
        //     this.setState({loading:false});
        // })
        collectionRef.get().then
        (snapShot => {
                const collectionMap = convertSnapshotToMap(snapShot);
                updateCollections(collectionMap);
                this.setState({loading:false});
            })
    }
    // componentWillUnmount() {
    //     this.unsubscribeFromSnapshot();
    // }
    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props=>(<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={props=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);