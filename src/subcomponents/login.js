import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';
import md5 from 'md5';
import api from '../backend-utilities/api.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: "..."
      , username: ""
      , password: ""
      , logged_in: props.logged_in
      , poop: props.poop
    };
    this.logInHandler = props.logInHandler;
  }
  componentDidMount(){
    if(this.state.logged_in){
      this.props.loginRedirect();
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      logged_in: nextProps.logged_in
    });
    if(nextProps.logged_in){
      this.props.loginRedirect();
    }
  }
  testSubmit = event => {
    event.preventDefault();
    console.log("Submitted");
  };
  loginSubmit = event => {
    var self = this;
    event.preventDefault();
    api.login(this.state.username, this.state.password).then(function(response){
      //self.setState({test: JSON.stringify(response.data)});
      var login_data = response.data;
      if(Array.isArray(login_data) && login_data.length === 1){
        var login = login_data[0];
        self.setState({test: JSON.stringify(login)});
        self.props.logInHandler(event, login.username, login.password, login.name, login.role);
        //the redirect now happens in the props recieve
        //self.props.loginRedirect();
      }
      else{
        self.setState({test: 'Login Failed'});
      }
    });
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handlePasswordChange = event => {
    const name = event.target.name;
    const value = md5('salty salt salt' + event.target.value);
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>


        <form onSubmit={this.testSubmit} className="login-form">
          <div className="username-wrapper">
            <label>Username</label>
            <input type="text"
              name="username"
              placeholder="Enter Username"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input type="password"
              name="password"
              placeholder="Enter Password"
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="button-wrapper">
            <button onClick={this.loginSubmit} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <br/>
        {this.state.username}<br/>
        {this.state.password}<br/>
        {this.state.test}
      </div>
    );
  }
}

export default Login;
