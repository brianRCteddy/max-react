import React from 'react';

const Person = (props) => {
	return (
		<div className="Person">
			<h3 onClick={props.onButtonChange}>
				{props.name} age: {props.age}
			</h3>
			<p>{props.children}</p>
			<p>I just used props to access the stuff from App component</p>
			<input onChange={props.onInputChange} type="text" value={props.name} />
		</div>
	);
};

export default Person;
