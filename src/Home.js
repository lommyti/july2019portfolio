import React, { Component } from "react";
import logo from "./logo.svg";
import tangerine from "./img/tangerine.png";
import braintree from "./img/braintree.png";
import airbnb from "./img/airbnb.png";
import factCheck from "./img/fact-check.png";
import resume from "./Li_Thomas_Resume.pdf";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div class="g-16 m-g-12">
          {/* Link Header */}
          <div class="g-col-13-4 m-g-col-9-4 text-center m-top-2em">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href={resume} target="_blank">
              Resume
            </a>
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
          <div class="cta-header">
            <h3 class="case-study-text">SEE MY PORTFOLIO</h3>

            <h3 class="case-study-text">↓ ↓ ↓</h3>
          </div>

          {/* Case Studies */}
          <div class="shadow g-col-5-8 m-g-col-3-8 after-fold">
            <Link to="/airbnb">
              <div class="case-study g-2-5">
                <div class="cta g-row-1-4 g-col-1-4">
                  <span>
                    See the <br />
                    case study ↗
                  </span>
                </div>

                <img class="g-row-1-4 g-col-1-4 case-study-img" src={airbnb} />
                <div class="g-col-6-3 v-align-mid">
                  <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
                    AIRBNB
                  </h3>
                  <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
                    Pet Payments
                  </h2>
                  <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
                    Providing the right security for Airbnb hosts who allow
                    guests travelling with pets.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div class="shadow g-col-5-8 m-g-col-3-8">
            <div class="case-study g-2-5">
              <div class="cta g-row-1-4 g-col-1-4">
                <span>
                  See the <br />
                  case study ↗
                </span>
              </div>

              <img class="g-row-1-4 g-col-1-4 case-study-img" src={braintree} />
              <div class="g-col-6-3 v-align-mid">
                <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
                  BRAINTREE
                </h3>
                <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
                  Hosted Fields Landing Page
                </h2>
                <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
                  Illustrating the value of Hosted Fields within the Braintree
                  developer docs.
                </p>
              </div>
            </div>
          </div>

          <div class="shadow g-col-5-8 m-g-col-3-8">
            <div class="case-study g-2-5">
              <div class="cta g-row-1-4 g-col-1-4">
                <span>
                  See the <br />
                  case study ↗
                </span>
              </div>

              <img class="g-row-1-4 g-col-1-4 case-study-img" src={factCheck} />
              <div class="g-col-6-3 v-align-mid">
                <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
                  NU KNIGHT LAB
                </h3>
                <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
                  Fact-Check Flow
                </h2>
                <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
                  Allowing journalists in small newsrooms to fact-check stories
                  within Google Docs.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div class="g-2-2 g-col-5-8 m-g-col-3-8">
            <p class="g-col-1-8 m-top-2em">© 2019</p>
            <p class="g-col-1-4 m-0-0">Let's chat!</p>
            <p class="g-col-1-4 m-0">thomastli@u.northwestern.edu</p>
            <p class="g-col-5-4 m-0 text-right m-g-col-1-8 m-text-left">
              <a href="https://linkedin.com/in/thomastli">LinkedIn</a>
              <a href="https://twitter.com/thmstli">Twitter</a>
              <a href="https://medium.com/@thomastli">Medium</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
