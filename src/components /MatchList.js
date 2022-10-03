import React from "react";
import Match from "./Match";

const MatchList = (props) => {
  const matches = props.matchData.map((match, key) => {
    return (
      <Match
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
        matchNumber={key}
      />
    );
  });
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
};

export default MatchList;
