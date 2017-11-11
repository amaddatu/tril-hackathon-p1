import React, { Component } from 'react';
import logo from './logo.svg';
import md5 from 'md5';
import Header from './subcomponents/header.js';
import Home from './subcomponents/home.js';
import Login from './subcomponents/login.js';
import './App.css';
import ReactRouterDOM, {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


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

      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
          </Switch>
        
        </div>
      </BrowserRouter>
    );
  }
  /*render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.test}
      </div>
    );
  }*/
}

export default App;
