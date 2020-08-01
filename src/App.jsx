import React, { Component } from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Account from './pages/useraccount/user-account';
import {connect} from "react-redux";
import {selectCurrentUser } from './redux/user/user-selectors';
import {createStructuredSelector} from "reselect";
import CheckoutPage from './pages/checkout/checkout';
import { checkUserSession } from './redux/user/user-actions';
class App extends Component {
  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to="/" />:<Account />}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession:()=>dispatch(checkUserSession()),
});

const mapStatetoProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);
