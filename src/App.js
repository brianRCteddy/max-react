import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>I'm from App Component</h1>
				<Person name="Yema" />
				<Person name="Ube" />
				<Person name="Bulalo" />
			</div>
		);
	}
}

export default App;
