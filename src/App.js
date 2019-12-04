import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		people: [
			{
				name: 'Yema',
				age: 3
			},
			{
				name: 'Ube',
				age: 4
			},
			{
				name: 'Bulalo',
				age: 5
			}
		]
	};

	render() {
		return (
			<div className="App">
				<h1>I'm from App Component</h1>
				<button>Change Name</button>
				<Person name={this.state.people[0].name} age={this.state.people[0].age} />
				<Person name={this.state.people[1].name} age={this.state.people[1].age}>
					Anak ni Ube
				</Person>
				<Person name={this.state.people[2].name} age={this.state.people[2].age} />
			</div>
		);
	}
}

export default App;
