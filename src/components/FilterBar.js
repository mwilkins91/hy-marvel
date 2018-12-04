import React, { Component } from 'react';
import "./FilterBar.scss";

class FilterBar extends Component {
	render(){
		return (<div className="FilterBar__Component">
			<form>
			  <label class="visually-hidden">
			    Search Characters:
			  </label>
			  <input type="text" placeholder="spider-man"/>
			  <button type="submit">Submit</button>
			</form>
		</div>)
	}
};


export default FilterBar;
