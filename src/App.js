import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  onFilterSubmit = (filters) => {
    this.setState({ 
      searchQuery: filters.searchQuery
    })
  }

  render() {
    return (
      <div className="App__Component">
        <Header onFilterSubmit={this.onFilterSubmit}/>
        <CharacterList />
        <Footer />
      </div>
    );
  }
}

export default App;
