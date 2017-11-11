import React, { Component } from 'react';
// import logo from './logo.svg';
import md5 from 'md5';
import Header from './subcomponents/header.js';
import Main from './subcomponents/main.js';
import './App.css';
import './bootstrap/bootstrap.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'myCode'
    };
  }
  componentDidMount(){
    this.setState({test: md5(this.state.test)});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
