import React, { Component } from 'react';
import "./FilterBar.scss";

class FilterBar extends Component {
	render(){
		return (<div className="FilterBar__Component">     
			<form>
			  <label>
			    Search Characters:
			    <input type="text" />
			  </label>
			  <button type="submit">Submit</button>
			</form>
		</div>)
	}
};


export default FilterBar;
