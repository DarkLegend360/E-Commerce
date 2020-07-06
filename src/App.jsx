import React, { Component } from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Account from './pages/useraccount/user-account';
import {auth} from "./firebase/firebase.util";

class App extends Component {
  constructor() {
    super();
    this.state={currentUser:null};
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route path="/signin" component={Account}/>
        </Switch>
      </div>
    );
  }
}

export default App;
