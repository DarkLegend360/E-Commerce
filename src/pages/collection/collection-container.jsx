import { connect } from "react-redux";
import {compose} from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";
import { selectisLoaded } from "../../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
    isLoading:state=> !selectisLoaded(state)
});
const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;