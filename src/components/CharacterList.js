import React, { Component } from 'react';
import "./CharacterList.scss"; 

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    }
  }

  renderCharacters() {
    const characterList = [];
    return (<div className="character-list">{characterList}</div>);
  }

  renderEmptyState(props) {
    return (<div>
      <p>Loading characters....</p>
    </div>);
  }

  render() {
  	return (<section className="CharacterList__Component">
  		<h3>Characters List</h3>
      {this.state.characters.length ? this.renderCharacters() : this.renderEmptyState()}
  	</section>)
  }
};


export default CharacterList;
