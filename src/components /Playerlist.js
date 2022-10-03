import React from "react";
import Player from "./Player";

const PlayerList = (props) => {
  const onePlayer = props.playerData[0];
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
