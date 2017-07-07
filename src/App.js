import React, { Component } from 'react';
import Schedule from './Schedule';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<Schedule schedule="10" />
				<Schedule schedule="20" />
			</div>
		);
	}
}

export default App;
