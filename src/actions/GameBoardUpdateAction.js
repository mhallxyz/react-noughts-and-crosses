export const gameBoardUpdate = (cell, team) => {
  return {
    type: 'GAME_UPDATE',
    payload: {
      cell,
      team
    }
  }
};