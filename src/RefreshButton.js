import React, { Component } from 'react';
import './RefreshButton.css';


export default class RefreshButton extends Component {
	handleClick() {
		this.props.refresh();
	}

	render() {
		return(
			<button className="RefreshButton" onClick={() => this.handleClick()}>Refresh</button>
		);
	}
} 