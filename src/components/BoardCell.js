import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gameBoardUpdate } from '../actions/GameBoardUpdateAction';
import { changeTurn } from '../actions/ChangeTurnAction';

class BoardCell extends Component {

  render() {
    console.log(this.props)
    return(
      <div 
        className="board-cell" 
        onClick={() => {
          this.props.gameBoardUpdate(this.props.location, this.props.turn)
          this.props.changeTurn(this.props.turn)}}>
        {this.props.gameBoard[this.props.location]}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    gameBoard: state.gameBoard,
    turn: state.turn
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  gameBoardUpdate,
  changeTurn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(BoardCell);