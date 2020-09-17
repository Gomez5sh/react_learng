import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "../src/CounterApp";
//import FirstApp from "../src/FirstApp";
import "../src/index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<CounterApp value={1} />, divRoot);
