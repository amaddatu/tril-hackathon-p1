import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			logged_in: props.logged_in
			, name: props.name
			, role: props.role
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			logged_in: nextProps.logged_in
			, name: nextProps.name
			, role: nextProps.role
		});
	}
  render() {
  	var homeDash = null;
  	if(this.state.logged_in){
  		homeDash = <div className="dashboard">
  		<h1>Dashboard</h1>
  		<h2>Hello {this.state.name} ({this.state.role})!</h2>
  		</div>;
  	}
  	else{
  		homeDash = <h1>Home</h1>;
  	}
    return (
      <div className="Home">
        {homeDash}
      </div>
    );
  }
}

export default Home;
