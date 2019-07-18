import React from "react";
import logo from "./logo.svg";
import tangerine from "./img/tangerine.png";
import braintree from "./img/braintree.png";
import airbnb from "./img/airbnb.png";
import factCheck from "./img/fact-check.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import PetPayment from "./PetPayments";

import resume from "./Li_Thomas_Resume.pdf";

import "./App.css";
import "./Layout.css";
import "./Mobile.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/airbnb" exact component={PetPayment} />
    </Router>
  );
}

export default App;
