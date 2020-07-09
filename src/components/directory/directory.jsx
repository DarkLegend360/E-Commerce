import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import {createStructuredSelector} from "reselect";

function DirectoryMenu({sections}) { 
    return (<div className="dir-menu">
        {sections.map(({id,...otherProps})=> <MenuItem key={id} {...otherProps}/>)}
    </div>
);
}
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);