export default (state = null, action) => {
  console.log(state);
  switch(action.type) {
    case 'GAME_UPDATE' :
      return action.payload;
    default:
      return state;
  }
};