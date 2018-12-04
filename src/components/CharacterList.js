import React, { Component } from 'react';
import axios from 'axios';
import "./CharacterList.scss"; 

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    }
  }

  renderCharacters() {
    return this.state.characters.map((character, index) => {
      return (<div>Placeholder for character info</div>);
    });
  }

  renderEmptyState(props) {
    return (<div>
      <p>Loading characters....</p>
    </div>);
  }

  render() {
  	return (<section className="CharacterList__Component">
  		<div className="character-list">
  		  <h3>Characters List</h3>
  		  <div>{this.state.characters.length ? this.renderCharacters() : this.renderEmptyState()}</div>
  		</div>
  	</section>)
  }
};


export default CharacterList;
