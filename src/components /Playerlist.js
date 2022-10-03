import React from "react";
import Player from "./Player";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";

const PlayerList = (props) => {
  const playerDataArray = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player
        fname={onePlayer.firstName}
        lname={onePlayer.lastName}
        gameTag={onePlayer.gameTag}
        wins={onePlayer.wins}
      />
    </section>
  );
};

export default PlayerList;
