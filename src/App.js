import React, { Component } from 'react';
// import logo from './logo.svg';
// import md5 from 'md5';
import Header from './subcomponents/header.js';
import Main from './subcomponents/main.js';
import './App.css';
import './bootstrap/bootstrap.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // test: 'myCode'
      // , 
      logged_in: false
      , username: ''
      , password: ''
      , name: ''
      , role: ''
      , poop: 'Amber'
    };
    this.logInHandler = this.logInHandler.bind(this);
    this.logOutHandler = this.logOutHandler.bind(this);
  }
  componentDidMount(){
    // this.setState({test: md5(this.state.test)});
    var sessionUsername = window.sessionStorage.getItem("sessionUsername");
    var sessionPassword = window.sessionStorage.getItem("sessionPassword");
    if(
      typeof sessionUsername !== 'undefined' && sessionUsername !== null
      && typeof sessionPassword !== 'undefined' && sessionPassword !== null
    ){
      this.setState({
        logged_in: true
        , username: sessionUsername
        , password: sessionPassword
        , name: window.sessionStorage.getItem("sessionName")
        , role: window.sessionStorage.getItem("sessionRole")
      });
    }
  }

  logInHandler = (event, username, password, name, role) => {
    window.sessionStorage.setItem("sessionUsername", username);
    window.sessionStorage.setItem("sessionPassword", password);
    window.sessionStorage.setItem("sessionName", name);
    window.sessionStorage.setItem("sessionRole", role);
    this.setState({
      logged_in: true
      , username: username
      , password: password
      , name: name
      , role: role
    });
  };
  logOutHandler = event => {
    window.sessionStorage.removeItem("sessionUsername");
    window.sessionStorage.removeItem("sessionPassword");
    window.sessionStorage.removeItem("sessionName");
    window.sessionStorage.removeItem("sessionRole");
    this.setState({
      logged_in: false
      , username: ''
      , password: ''
      , name: ''
      , role: ''
    });
  };

  render() {
    return (
      <div className="App">
        <Header 
          logged_in={this.state.logged_in}
          name={this.state.name}
          role={this.state.role}
          logOutHandler={this.logOutHandler}
        />
        <Main 
          logged_in={this.state.logged_in}
          name={this.state.name}
          role={this.state.role}
          logInHandler={this.logInHandler}
          poop={this.state.poop}
        />
      </div>
    );
  }
}

export default App;
