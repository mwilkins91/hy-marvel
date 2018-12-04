import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App__Component">
        <header>
          <h1>Marvel Comic Explorer</h1>
          <p>Search and explore your favourite Marvel characters!</p>
        </header>
        <footer>Data provided by Marvel. © 2014 Marvel</footer>
      </div>
    );
  }
}

export default App;
