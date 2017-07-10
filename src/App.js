import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import RefreshButton from './RefreshButton';
import SchedulesList from './SchedulesList';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			lineType : "bus",
			lineId : "83",
			stationSlug : "ponscarme",
			schedules : []
		};
	}

	componentDidMount() {
		this.setNewSchedules();
	}

	setNewSchedules() {
		this.getNextSchedules()
		.then(schedules => {
			this.setState({
				schedules : schedules
			});
		}).catch(e => {
			console.log(e);
		});
	}

	getNextSchedules() {
		var baseUrl = "https://api-ratp.pierre-grimaud.fr/v3/schedules",
			requestUrl = baseUrl + "/" + this.state.lineType + "/" + this.state.lineId + "/" + this.state.stationSlug + "/R"; 

		var nextSchedules = new Promise((resolve, reject) => {
			
			var request = new XMLHttpRequest();

			// TODO : Rework on error handling cause it doesn't work
			request.onreadystatechange = () => {
				if(request.readyState === XMLHttpRequest.DONE){
					if(request.status === 200){
						var response = JSON.parse(request.response).result;

						if(response !== undefined){
							return resolve(response.schedules);
						}else {
							return reject(new Error("There is no schedules in the response API"));
						}
					} else {
						return reject(new Error("An error has occured while connecting to API"));
					}
				}
			};

			request.open("GET", requestUrl, true);
			request.send();
		});

		return nextSchedules;
	}

	refreshSchedules() {
		this.setNewSchedules();
	}

	render() {
		return (
			<div>
				<Breadcrumb lineType={this.state.lineType} lineId={this.state.lineId} stationSlug={this.state.stationSlug} />
				<SchedulesList schedules={this.state.schedules} />
				<RefreshButton refresh={() => this.refreshSchedules()} />
			</div>
		);
	}
}

export default App;
