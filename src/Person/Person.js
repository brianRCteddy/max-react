import React from 'react';

const Person = (props) => {
	return (
		<div>
			<h3 onClick={props.onChange}>
				{props.name} age: {props.age}
			</h3>
			<p>{props.children}</p>
			<p>I just used props to access the stuff from App component</p>
		</div>
	);
};

export default Person;
