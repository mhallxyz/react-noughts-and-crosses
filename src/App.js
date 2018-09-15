import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

import GameBoard from './containers/GameBoard';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nodes & Isotopes</h1>
        </header>
        <div className='left-div'></div>
        <GameBoard />
        <div className='right-div'></div>
        <div ckassName="bottom-div"></div>
      </div>
      </Provider>
    );
  }
}

export default App;
