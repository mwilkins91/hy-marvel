import React from 'react';
import FilterBar from './FilterBar';

const Header = (props) => {
	return (<header className="Header__Component">
		<h1>Marvel Comic Explorer</h1>
		<p>Search and explore your favourite Marvel characters!</p>
		<FilterBar />
	</header>);	

};

export default Header;

