import React from "react";
import ReactDOM from "react-dom";


console.log   ("JavaScript starts");

/* ------------------------------- rs */

document.getElementById(#{toJSON container01}).innerHTML = "This text was added by Ralf.";

/* ------------------------------- rs */

class Hello extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.name}!</div>
    );
  }
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById(#{toJSON container02})
);

/* ------------------------------- rs */

class LikeButton1 extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return ('You liked this.');
    }
    
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }

}

ReactDOM.render(
  <LikeButton1></LikeButton1>,
  document.getElementById(#{toJSON container03})
);

/* ------------------------------- rs */

function Greeter(props) {
  var [greeting, setGreeting] = React.useState("");

  function handleGreetClick() {
    alert("Hello, ".concat(greeting));
  }

  var charsRemaining = props.maxLength - greeting.length;

  var greetingInvalid = greeting.length == 0 || charsRemaining < 0;
  
  /*
  return  React.createElement("div", null, "Greeting:", 
            React.createElement("span", null, " "), 
            React.createElement("input", {value: greeting, onChange: function onChange(e) {return setGreeting(e.target.value);}}), 
            React.createElement("span", null, " ", charsRemaining), 
            React.createElement("p", null, 
              React.createElement("button", {disabled: greetingInvalid, onClick: handleGreetClick}, "Greet"), 
              React.createElement("span", null, " ", greeting)
            )
          );
  */
  
  return (
    <div>
      Greeting: 
      <span> </span> 
      <input value={greeting} onChange={e => setGreeting(e.target.value)} />
      <span>{charsRemaining}</span>
      <p> 
        <button disabled={greetingInvalid} onClick={handleGreetClick}>Greet</button> 
        <span> </span> 
      </p>
    </div>       
  );
  
}

ReactDOM.render(
  <Greeter maxLength={20} />, 
  document.getElementById(#{toJSON container04})
);

/* ------------------------------- rs */

const HelloWorld = () => (<div>Hello, you fat old world!</div>);

ReactDOM.render(
  <HelloWorld />, 
  document.getElementById(#{toJSON container05})
);

/* ------------------------------- rs */

function ChoiceBar1({title, percent}) {

  const [count, setCount] = React.useState(percent);

  function handleClick() {
    setCount(count + 1);
  }

  return  (
    <div className="ChoiceBar" onClick={handleClick}>
      <div className="Progress" style={{"width": count + "%"}}>
        <div className="ChoiceBarTitle">{title}</div>
      </div>
      <div className="ChoiceBarBadge">{count}</div>
    </div>
  );

}

ReactDOM.render(
  <ChoiceBar1 title="Progress Bar" percent={37}/>,
  document.getElementById(#{toJSON container06})
);

/* ------------------------------- rs */

function ChoiceBar({ title, percent, count, onClickHandler }) {
  
  return (
    <div className="ChoiceBar" onClick={onClickHandler}>
      <div className="Progress" style={{ width: percent + "%" }}>
        <div className="ChoiceBarTitle">{title}</div>
      </div>
      <div className="ChoiceBarBadge">{count}</div>
    </div>
  );
}

function VotingComponent1({vote: initialVote}) {
  
  const [vote, setVote] = React.useState(initialVote);

  const totalVotes = vote.choices.reduce((prev, curr) => prev + curr.count, 0);

  function registerChoice(choice) {
    setVote({
      ...vote,
      choices: vote.choices.map( c => choice.id !== c.id ? c : { ...choice, count: choice.count + 1 } )
    });
  }

  return (
    <div className="Row VotingRow Spacer">
      <div className="Head">
        <h1 className="Title">
          {vote.title}
          <div className="Badge">{totalVotes} Votes</div>
        </h1>
        <div className="Description Emphasis">{vote.description}</div>
      </div>
      <div>
        {vote.choices.map( choice => (
          <ChoiceBar
            key = {choice.id}
            title = {choice.title}
            percent = { choice.count * (100 / totalVotes) }
            count = {choice.count}
            onClickHandler = { () => registerChoice(choice) }
          />
        ))}
      </div>
    </div>
  );
}


const vote = {
  title: "How is your day?",
  description: "Tell me: how has your day been so far?",
  choices: [
    { id: "choice_1", title: "Good", count: 7 },
    { id: "choice_2", title: "Bad", count: 12 },
    { id: "choice_3", title: "Not sure yet", count: 1 }
  ]
};

// Render VotingComponent
export default ReactDOM.render(
  <VotingComponent1 vote={vote} />,
  document.getElementById(#{toJSON container07})
);

/* ------------------------------- rs */

//window.alert  ("Java Script loaded");
document.write("Java Script loaded");
console.log   ("Java Script loaded");

