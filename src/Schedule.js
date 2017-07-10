import React, { Component } from 'react';
import './Schedule.css';

export default class Schedule extends Component {
	render() {
		return (
			<li className="schedule">
				{this.props.schedule}
			</li>
		)
	}
}