import React, { Component } from 'react';
import './Schedule.css';

export default class Schedule extends Component {
	formatSchedule(schedule) {
		if(!isNaN(parseInt(schedule, 10))){
			schedule += " min";
		}
		return schedule;
	}

	render() {
		return (
			<div className="schedule">
				{this.formatSchedule(this.props.schedule)}
			</div>
		)
	}
}