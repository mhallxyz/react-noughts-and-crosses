export default (state = 1, action) => {

  switch(action.type) {
    case 'CHANGE_TURN':
      if(action.payload.turn === 1) {
        return 2
      } else {
        return 1
      }
    default:
      return 1;
  }
};