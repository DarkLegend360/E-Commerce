import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

function Processor() {
  return (<h1>HEllo</h1>);
  }


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/processor" component={Processor}/>
      </Switch>
    </div>
  );
}

export default App;
