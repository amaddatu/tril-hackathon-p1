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
  }

  logInHandler = (event, username, password, name, role) => {
    this.setState({
      logged_in: true
      , username: username
      , password: password
      , name: name
      , role: role
    });
  };
  logOutHandler = event => {
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
