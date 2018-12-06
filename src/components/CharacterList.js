import React, { Component } from 'react';
import axios from 'axios';
import "./CharacterList.scss"; 

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      offset: 0
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
          limit: 50,
          offset: this.state.offset
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

  loadMore = () => {
    this.setState({
      offset: this.state.offset + 20
    }, this.fetchCharacters)
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
  		<h2>Characters List</h2>
      {this.state.characters.length ? this.renderCharacters() : this.renderEmptyState()}
      <button onClick={this.loadMore}>Load More</button>
  	</section>)
  }
};


export default CharacterList;
