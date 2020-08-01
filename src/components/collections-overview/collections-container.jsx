import { connect } from "react-redux";
import {compose} from "redux";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "./collections-overview";
import { selectisFetching } from "../../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
    isLoading:selectisFetching
});
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;