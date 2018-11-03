import React, { Component } from 'react';
import './App.css';
import Square from './components/Square'
import Board from './components/Board'
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <Game/>
    );
  }
}

export default App;
