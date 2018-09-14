import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gameBoardUpdate } from '../actions/GameBoardUpdateAction';

class BoardCell extends Component {

  render() {
    console.log(this.props)
    return(
      <div className="board-cell" onClick={() => this.props.updateGame(this.props.location, this.props.turn)}>
        {this.props.gameBoard[this.props.location]}
      </div>
    )
  }
}

let mapStateToProps = state => {
  console.log(state)
  return {
    gameBoard: state.gameBoard,
    turn: state.playerOnesTurn
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateGame: gameBoardUpdate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(BoardCell);