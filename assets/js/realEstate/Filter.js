import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<select name="neighbourhood" className="filters neighbourhood">
						<option>Ridgewood</option>
					</select>
					<select name="housetype" className="filters housetype">
						<option>Ranch</option>
					</select>
					<select name="bedroom" className="filters bedroom">
						<option>2 bedrooms</option>
					</select>
					<div className="filters price">
						<span className="title">Price</span>
						<input type="text" name="min-price" className="price" />
						<input type="text" name="max-price" className="price" />
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min-floor-space"
							className="min-floor-space"
						/>
						<input
							type="text"
							name="max-floor-space"
							className="max-floor-space"
						/>
					</div>
					<div className="filters extras">
						<span className="title">Extras</span>
						<label id="extras">
							<span>Elevators</span>
							<input type="checkbox" name="extras" className="price" />
						</label>
						<label id="extras">
							<span>Swimming Pool</span>
							<input type="checkbox" name="swimming-pool" className="price" />
						</label>
						<label id="extras">
							<span>Finish Basement</span>
							<input type="checkbox" name="finish-basement" className="price" />
						</label>
						<label id="extras">
							<span>Gym</span>
							<input type="checkbox" name="gym" className="price" />
						</label>
					</div>
				</div>
			</section>
		);
	}
}
