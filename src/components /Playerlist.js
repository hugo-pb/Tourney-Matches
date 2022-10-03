import React from "react";
import Player from "./Player";

const PlayerList = (props) => {
  const Players = props.playerData.map((player, key) => {
    return (
      <Player
        fname={player.firstName}
        lname={player.lastName}
        gameTag={player.gameTag}
        wins={player.wins}
        gamerTag={key}
      />
    );
  });
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {Players}
    </section>
  );
};

export default PlayerList;
