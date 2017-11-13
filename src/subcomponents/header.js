import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			logged_in: props.logged_in
			, name: props.name
			, role: props.role
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			logged_in: nextProps.logged_in
			, name: nextProps.name
			, role: nextProps.role
		});
	}
	logOutHandler = event => {
		this.props.logOutHandler();
	};
  render() {
  	var isLoggedIn = this.state.logged_in;

    let loginlogoutbutton = null;
    if (isLoggedIn) {
      loginlogoutbutton = <li className="nav-item">
		        <Link className="nav-link" to="/" onClick={this.logOutHandler}>
		        	Log Out
		        </Link>
		      </li>;
    } else {
      loginlogoutbutton = <li className="nav-item">
		        <Link className="nav-link" to="/login">Login</Link>
		      </li>;
    }
    return (
      <div className="Header">
      	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <Link className="navbar-brand" to="/">Student Grouping Ultimate App</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>

		      {loginlogoutbutton}
		    </ul>

		      {this.state.logged_in}
		  </div>
		</nav>
      </div>
    );
  }
}

export default Header;
