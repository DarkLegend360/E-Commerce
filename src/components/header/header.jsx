import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg";
import { auth } from "../../firebase/firebase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

function Header({currentUser,hidden}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/">HOME</Link>
                <Link className="option" to="/shop">SHOP</Link>
                {
                    currentUser?(
                        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
                        :(<Link className="option" to="/signin">SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {
                hidden?null:<CartDropdown />
            }
        </div>
    );
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);