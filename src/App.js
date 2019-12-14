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
		],
		otherState: 'Untouched'
	};

	switchNameHandler = (newName) => {
		this.setState({
			people: [
				{
					name: newName,
					age: 3
				},
				{
					name: 'Ube',
					age: 4
				},
				{
					name: 'Bulalo',
					age: 999999
				}
			]
		});
	};

	nameChangeInputHandler = (event) => {
		this.setState({
			people: [
				{
					name: 'Yema',
					age: 3
				},
				{
					name: event.target.value,
					age: 4
				},
				{
					name: 'Bulalo',
					age: 5
				}
			]
		});
	};

	render() {
		return (
			<div className="App">
				<h1>I'm from App Component</h1>
				<button onClick={this.switchNameHandler.bind(this, 'YemaBOIIIIIIIIIII')}>Change Name</button>
				<Person name={this.state.people[0].name} age={this.state.people[0].age} />
				<Person
					onButtonChange={() => this.switchNameHandler('BOOOOOIIIIIYemaaa')}
					onInputChange={this.nameChangeInputHandler}
					name={this.state.people[1].name}
					age={this.state.people[1].age}
				>
					Anak ni Ube --- click h3 to Change
				</Person>
				<Person name={this.state.people[2].name} age={this.state.people[2].age} />
			</div>
		);
	}
}

export default App;
