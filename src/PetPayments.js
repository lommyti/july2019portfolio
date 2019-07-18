import React, { Component } from "react";
import logo from "./logo.svg";
import me from "./img/me.jpg";
import resume from "./Li_Thomas_Resume.pdf";

export default class About extends Component {
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
            <img class="g-row-1-3 img-w-3 m-half-h1" src={me} />
            <div class="g-col-1-8-1">
              <h1 class="m-h1">Pet Payments</h1>
            </div>
            <p class="g-col-1-2 lh-1-75">
              <h3 class="m-top-0 m-b-1">CURRENTLY:</h3>
              <p class="m-top-0">Chicago</p>
              <h3 class="m-b-1">BEFORE:</h3>
              <p class="m-top-0">Long Island, NY</p>
            </p>
            <p class="g-col-3-6 lh-1-75">
              I’m a fourth-year student, finishing up my degree in communication
              studies, computer science, & human-centered design at Northwestern
              University; a less-boring description of me would probably mention
              my affinity for toucans, oat milk cortados, BoJack Horseman, &
              geometric pie crust designs.
            </p>
          </div>

          {/* Case Studies
            <div class="cta-header">
              MORE OFFICIAL STUFF DOWN BELOW OR ↓ DOWNLOAD MY RESUME
            </div>
          <div class="shadow g-col-5-8 m-g-col-3-8 after-fold padding-5">
            <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
              B.S. COMMUNICATION, COMPUTER SCIENCE, DESIGN (JUNE 2020)
            </h3>
            <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
              Northwestern
            </h2>
            <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
              Related Courses – UX Design, Human-Computer Interaction,
              Algorithms & Society, Interactive Information Visualization, Rapid
              Prototyping for Software Innovation
            </p>
            <p>
              Activities – Develop + Innovate for Social Change, Bay Area
              Immersion Program
            </p>
          </div>

          <div class="shadow g-col-5-8 m-g-col-3-8 padding-5">
            <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
              B.S. COMMUNICATION, COMPUTER SCIENCE, DESIGN (JUNE 2020)
            </h3>
            <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
              Northwestern
            </h2>
            <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
              Related Courses – UX Design, Human-Computer Interaction,
              Algorithms & Society, Interactive Information Visualization, Rapid
              Prototyping for Software Innovation
            </p>
            <p>
              Activities – Develop + Innovate for Social Change, Bay Area
              Immersion Program
            </p>
          </div>

          <div class="shadow g-col-5-8 m-g-col-3-8 padding-5">
            <h3 class="g-col-6-3 m-0-0 g-row-1-1 case-study-text m-bottom-1">
              B.S. COMMUNICATION, COMPUTER SCIENCE, DESIGN (JUNE 2020)
            </h3>
            <h2 class="g-col-6-3 m-0-0 g-row-2-1 case-study-text m-bottom-2">
              Northwestern
            </h2>
            <p class="g-col-6-3 m-0-0 g-row-3-1 case-study-text">
              Related Courses – UX Design, Human-Computer Interaction,
              Algorithms & Society, Interactive Information Visualization, Rapid
              Prototyping for Software Innovation
            </p>
            <p>
              Activities – Develop + Innovate for Social Change, Bay Area
              Immersion Program
            </p>
          </div> */}
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
