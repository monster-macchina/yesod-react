import React from "react";


export default function InactiveVoteComposer({ onActivate }) { // Spacer
  return (
    <div className="Row VotesRow Selectable" onClick={onActivate}>
      <h1 className="Title">
        <span className="Emphasis">
          What do <b>you</b> want to know ?
        </span>

        <div className="Badge">Add Voting</div>
      </h1>
      <p>Click here to leave your own question.</p>
    </div>
  );
}

