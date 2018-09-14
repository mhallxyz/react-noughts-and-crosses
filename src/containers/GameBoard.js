import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import BoardCell from '../components/BoardCell';

class GameBoard extends Component {
  render() {
    console.log(this.props)
    return(
      <div className="game-board">
        <row className="board-row">
          <BoardCell location={0} />
          <BoardCell location={1} />
          <BoardCell location={2} />
        </row>
        <row className="board-row">
          <BoardCell location={3} />
          <BoardCell location={4} />
          <BoardCell location={5} />
        </row>
        <row className="board-row">
          <BoardCell location={6} />
          <BoardCell location={7} />
          <BoardCell location={8} />
        </row>
      </div>
    )
  }
}

// let mapStateToProps = state => {
//   console.log(state)
//   return {
//     gameBoard: state.gameBoard,
//     playerOnesTurn: state.playerOnesTurn
//   }
// }

export default GameBoard;