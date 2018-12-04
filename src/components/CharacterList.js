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

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async() => {
    try {
      const charactersData = await axios.get(`https://gateway.marvel.com:443/v1/public/characters`, {
        params: {
          apikey: "7a9e90379097ff7a2c43f9ab74f30d24",
          limit: 50
        }
      });

      const characters = [...this.state.characters, ...charactersData.data.data.results]

      this.setState({ 
        characters: characters
      });
    } catch (e) {
      this.setState({ err: e.message })
    } 
  }

  renderCharacters() {
    const characterList = this.state.characters.map((character, index) => {
      return (<div className="character-card" key={`${character.id}-${index}`}>
        <img alt="" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
        <p>{character.name}</p>
      </div>);
    });
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
