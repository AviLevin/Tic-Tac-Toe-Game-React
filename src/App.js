import React from 'react';

import logo from './logo.svg';

import './App.css';
import Board from '../src/components/Board'


class App extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        
        </div>
      </div>
    );
  }
}
 
export default App;
