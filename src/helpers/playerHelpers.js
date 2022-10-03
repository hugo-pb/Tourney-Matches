export const preparePlayerData = (data) => {
  return Object.values(data);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map((player) => {
    const currentWins = matchData.reduce((accumulator, match) => {
      if (match.winner === player.gameTag) {
        return (accumulator += 1);
      } else {
        return accumulator;
      }
    }, 0);

    player.wins = currentWins;

    return player;
  });
};
