import React from "react";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import Player from "./Player";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";

const PlayerList = () => {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
};

export default PlayerList;
