import React from "react";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {createStructuredSelector} from "reselect";
import { selectHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser} from "../../redux/user/user-selectors";
import {HeaderContainer,HeaderLogo,LogoContainer,OptionsContainer,OptionLink} from "./header-styles";
import { signOutStart } from "../../redux/user/user-actions";
function Header({currentUser,hidden,signOutStart}) {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <HeaderLogo/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/">HOME</OptionLink>
                <OptionLink to="/shop">SHOP</OptionLink>
                {
                    currentUser?(
                        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
                        :(<OptionLink to="/signin">SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden?null:<CartDropdown />
            }
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);