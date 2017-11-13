import React, { Component } from 'react';
import '../App.css';
import Home from './home.js';
import Login from './login.js';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom'

class Main extends Component {
	Login = withRouter(({ history }) => {
	  return (
	    <Login 
	  	  logged_in={this.props.logged_in}
          name={this.props.name}
          role={this.props.role}
	      logInHandler={this.props.logInHandler}
	      poop={this.props.poop}
	      loginRedirect = {() => { history.push('/') }}
	    />
	  );
	});
	Home = (props) => {
	  return (
	    <Home 
	  	  logged_in={this.props.logged_in}
          name={this.props.name}
          role={this.props.role}
	    />
	  );
	};
  render() {

    return (
      <div className="Main">
        <Route exact path="/" render={this.Home} />
        <Route exact path="/login" render={this.Login} />
      </div>
    );
  }
}

export default Main;
