import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import * as constants from "./home.tmp.js";
import VoteController from "./VoteController.tmp.js";




const allVotes = [
{
    id: "vote_1",
    title: "How is your day?",
    description: "Tell me: how has your day been so far?",
    choices: [
    { id: "choice_1", title: "Good", count: 7 },
    { id: "choice_2", title: "Bad", count: 12 },
    { id: "choice_3", title: "Not sure yet", count: 1 }
    ]
},
{
    id: "vote_2",
    title: "Programming languages",
    description: "What is your preferred language?",
    choices: [
    { id: "choice_1", title: "JavaScript", count: 5 },
    { id: "choice_2", title: "Java", count: 9 },
    { id: "choice_3", title: "Plain english", count: 17 }
    ]
}
];



ReactDOM.render(
<VoteController initialVotes={allVotes} />,
document.getElementById('#{toJSON container08}')
);

