import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="header">
				<div className="logo"> Logo </div>
				<nav>
					<a href="#"> create ads </a>
					<a href="#"> about us </a>
					<a href="#"> login </a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</div>
		);
	}
}
