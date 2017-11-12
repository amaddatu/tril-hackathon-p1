import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import md5 from 'md5';
import api from '../backend-utilities/api.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: "..."
      , username: ""
      , password: ""
    };
  }
  componentDidMount(){
    var self = this;
    // axios.get('/users/').then(function(response){
    //   self.setState({test: response.data});
    // });
    api.poopTest().then(function(response){
      self.setState({test: JSON.stringify(response.data)});
    });
    
  }
  testSubmit = event => {
    event.preventDefault();
    console.log("Submitted");
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
    const value = md5(event.target.value);
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
            <button onClick={this.testSubmit} className="btn btn-primary">
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
