import React, { Component } from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Account from './pages/useraccount/user-account';
import {auth, createUserAccount} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-actions";
import {selectCurrentUser } from './redux/user/user-selectors';
import {createStructuredSelector} from "reselect";
import CheckoutPage from './pages/checkout/checkout';

class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=> {
      if(userAuth) {
        const userRef = await createUserAccount(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
          console.log(this.state);
          
        });
        
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to="/" />:<Account />}/>
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);
