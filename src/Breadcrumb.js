import React, { Component } from 'react';

export default class Breadcrumb extends Component {
	render() {
		return(
			<div>
				Next departure of {this.props.lineType} {this.props.lineId} at {this.props.stationSlug}
			</div>
		)
	}
}