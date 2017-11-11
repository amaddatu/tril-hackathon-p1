import React, { Component } from 'react';
import '../App.css';
import ReactRouterDOM, {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<ul>
      		<li><Link to='/'>Home</Link></li>
        	<li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
