import React, { Component } from 'react';
import './Schedule.css';

export default class Schedule extends Component {
	render() {
		return (
			<div className="schedule">
				{this.props.schedule}
			</div>
		)
	}
}