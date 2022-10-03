import React from "react";
import playerData from "../data/playerData";
import matchData from "../data/matchData";

const Playerlist = () => {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
};

export default Playerlist;
