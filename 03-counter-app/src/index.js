import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "../src/CounterApp";
// import FirstApp from "../src/FirstApp";
import "../src/index.css";

const divRoot = document.querySelector("#root");

//ReactDOM.render(<FirstApp hello="Hi, i am a App" />, divRoot);

ReactDOM.render(<CounterApp value={10} />, divRoot);
