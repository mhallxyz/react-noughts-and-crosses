export default (state = null, action) => {
  console.log(action)
  switch(action.type) {
    case 'GAME_UPDATE' :
      return state
    default:
      return state;
  }
};