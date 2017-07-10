import React, { Component } from 'react';
import Schedule from './Schedule';
import './SchedulesList.css';


export default class SchedulesList extends Component {
	render() {
		const schedules = this.props.schedules;

		return(
			<ul className="schedulesList">
				{schedules.map((schedule, index) => {
					return <Schedule key={index} schedule={schedule.message} />
				})}
			</ul>
		);
	}
}