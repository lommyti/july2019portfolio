import React from "react";
import logo from "./logo.svg";
import tangerine from "./img/tangerine.png";
import "./App.css";
import "./Layout.css";
import "./Mobile.css";

function App() {
  return (
    <div className="App">
      <div class="g-16 m-g-12">
        {/* Link Header */}
        <div class="g-col-13-4 m-g-col-9-4 text-center m-top-2em">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Resume</a>
        </div>

        {/* Header */}
        <div class="g-2-2 g-col-5-8 m-g-col-3-8 vertical-center">
          <img class="g-row-1-3 img-h-h1 m-half-h1" src={tangerine} />
          <div class="g-col-2-7">
            <h1 class="m-h1">Hey! I'm Tommy, a product designer.</h1>
          </div>
          <p class="g-col-2-7 lh-1-75">
            I'm passionate about designing with intent and questioning
            assumptions about people & tech.
          </p>
          <p class="g-col-2-7 lh-1-75">
            Graduating in June 2020 with a B.S. in communication studies,
            computer science, & human-centered design from Northwestern
            University.
          </p>
        </div>

        {/* Case Studies */}
        <div class="shadow g-col-5-8 m-g-col-3-8 after-fold">
          <div class="case-study g-2-5">
            <img class="g-row-1-4 g-col-1-5 case-study-img" src={tangerine} />

            <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text">AIRBNB</h3>
            <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text">
              Pet Payments
            </h2>
            <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
              Providing the right security for Airbnb hosts who allow guests
              travelling with pets.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div class="g-2-2 g-col-5-8 m-g-col-3-8">
          <p class="g-col-1-8 m-top-2em">copyright 2019</p>
          <p class="g-col-1-4 m-0-0">Let's chat!</p>
          <p class="g-col-1-4 m-0">thomastli@u.northwestern.edu</p>
          <p class="g-col-5-4 m-0 text-right m-g-col-1-8 m-text-left">
            <a href="https://linkedin.com/in/thomastli">LinkedIn</a>
            <a href="https://twitter.com/thmstli">Twitter</a>
            <a href="https://medium.com/@thomastli"> Medium</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
