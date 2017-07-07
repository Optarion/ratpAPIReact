import React, { Component } from 'react';
import Schedule from './Schedule';
import Breadcrumb from './Breadcrumb';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<Breadcrumb lineType="bus" lineId="83" stationSlug="ponscarme" />
				<div>
					<Schedule schedule="0" />
					<Schedule schedule="20" />
				</div>
			</div>
		);
	}
}

export default App;
