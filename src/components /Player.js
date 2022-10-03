import React from "react";

const Player = (props) => {
  return (
    <article className="Player">
      <h1>
        {props.fname} <span>{props.gameTag}</span> {props.lname}
      </h1>
      {props.wins === 0 && <h2 className="zero">Currently with no wins</h2>}

      {props.wins === 1 && <h2>Currently at 1 win</h2>}

      {props.wins > 1 && <h2>Currently at {props.wins} wins</h2>}
    </article>
  );
};

export default Player;
