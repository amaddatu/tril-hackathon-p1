import React, { Component } from 'react';
import '../App.css';
import Home from './home.js';
import Login from './login.js';
import { Route } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default Main;
