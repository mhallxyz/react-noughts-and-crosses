import React, { Component } from 'react';
import BoardCell from '../components/BoardCell';

class GameBoard extends Component {
  render() {
    return(
      <div className="game-board">
        <div className="board-row">
          <BoardCell location={0} />
          <BoardCell location={1} />
          <BoardCell location={2} />
        </div>
        <div className="board-row">
          <BoardCell location={3} />
          <BoardCell location={4} />
          <BoardCell location={5} />
        </div>
        <div className="board-row">
          <BoardCell location={6} />
          <BoardCell location={7} />
          <BoardCell location={8} />
        </div>
      </div>
    )
  }
}

export default GameBoard;