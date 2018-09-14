export default (state = 1, action) => {
  console.log(state);
  switch(action.type) {
    case 'GAME_UPDATE' :
        if (state.turn === 1){
          return 2
        } else {
          return 1
        }
    default:
      return state;
  }
};