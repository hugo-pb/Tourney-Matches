import React from "react";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import Player from "./Player";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";

const PlayerList = () => {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
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
