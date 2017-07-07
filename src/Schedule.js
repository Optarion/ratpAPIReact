import React, { Component } from 'react';

export default class Schedule extends Component {
	formatSchedule(schedule) {
		if(!isNaN(parseInt(schedule, 10))){
			schedule += " min";
		}
		return schedule;
	}

	render() {
		return (
			<div>
				{this.formatSchedule(this.props.schedule)}
			</div>
		)
	}
}