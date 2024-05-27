import React from "react";


export default function VoteComposer({ onSave, onDeactivate }) {
    const [voteTitle, setVoteTitle] = React.useState("");
    const [voteDescription, setVoteDescription] = React.useState("");
    const [choices, setChoices] = React.useState([""]);
    const titleInputRef = React.useRef();
  
    function updateChoice(choiceIx, choiceTitle) {
      const newChoices = choices.map((c, ix) =>
        ix === choiceIx ? choiceTitle : c
      );
  
      
      
      
      if (choices[choiceIx].length === 0 && choiceIx === choices.length - 1) {
        newChoices.push("");
      }
  
      setChoices(newChoices);
    }
  
    function save() {
      
      
      const newVote = {
        id: `vote_${Date.now()}`,
        title: voteTitle,
        description: voteDescription,
        choices: choices
          .slice(0, -1)
          .map((c, ix) => ({ title: c, id: `choice_${ix}`, count: 0 }))
      };
  
      onSave(newVote);
    }
  
    function reset() {
      
      setVoteTitle("");
      setVoteDescription("");
      setChoices([""]);
  
      
      titleInputRef.current.focus();
    }
  
    const formCompleted =
      voteTitle &&
      voteDescription &&
      choices.length > 1 &&
      choices.every((c, ix) => ix === choices.length - 1 || c.length > 0);
  
    return (
      <div className="Row VoteComposer Spacer">
        <div className="Head">
          <h1 className="Title">
            <input
              className="Title"
              autoFocus
              name="title"
              type="text"
              placeholder="What do you want to know ?"
              value={voteTitle}
              onChange={e => setVoteTitle(e.target.value)}
              ref={titleInputRef}
            />
          </h1>
          <input
            className="Description"
            name="description"
            type="text"
            placeholder="Describe your question in one sentence here"
            value={voteDescription}
            onChange={e => setVoteDescription(e.target.value)}
          />
        </div>
  
        <div className="Body">
          {choices.map((choice, ix) => (
            <input
              className="Choice"
              type="text"
              key={`choices_${ix}`}
              value={choice}
              placeholder={`Choice #${ix + 1}`}
              onChange={event => updateChoice(ix, event.target.value)}
            />
          ))}
          <div className="ButtonBar">
            <button disabled={!formCompleted} className="Button" onClick={save}>
              Save
            </button>
            <button className="Button" onClick={onDeactivate}>
              Cancel
            </button>
            <button className="Button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
}

