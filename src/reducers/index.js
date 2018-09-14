import { combineReducers } from 'redux';
import GameBoardReducer from './GameBoardReducer';
import TurnChanger from './TurnChanger';


export default combineReducers({
  gameBoard: GameBoardReducer,
  turn: TurnChanger
});