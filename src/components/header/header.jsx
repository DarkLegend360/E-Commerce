import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg";
import { auth } from "../../firebase/firebase.util";

function Header({currentUser}) {
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
            </div>
        </div>
    );
}

export default Header;