import React, { Component } from 'react';
import './Breadcrumb.css';

export default class Breadcrumb extends Component {
	render() {
		return(
			<header className="breadcrumb">
				Next departure of {this.props.lineType} {this.props.lineId} at {this.props.stationSlug}
			</header>
		)
	}
}