import React, { Component } from "react";
import logo from "./logo.svg";
import me from "./img/me.jpg";
import resume from "./Li_Thomas_Resume.pdf";
import braintree from "./img/braintree.png";

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <div class="g-16 m-g-12">
          {/* Link Header */}
          <div class="g-col-0-4 m-g-col-9-4 text-right m-top-2em pos-absolute ">
            <a href="/" class="pill-link">
              <i class="material-icons pill-icon">home</i> Home
            </a>
            <br />
            <a href="/about" class="pill-link">
              <i class="material-icons pill-icon">person</i> About
            </a>
            <br />
            <a href={resume} target="_blank" class="pill-link">
              <i class="material-icons pill-icon">description</i> Resume
            </a>
          </div>

          {/* Header */}
          <div class="g-2-2 g-col-5-8 m-g-col-3-8 vertical-center">
            <img class="g-row-1-8 img-w-3 m-half-h1" src={braintree} />
            <div class="g-col-1-8-1">
              <h1 class="m-h1">Hosted Fields Landing Page</h1>
            </div>
            <h2>Context</h2>
            <p class="g-col-1-6 lh-1-75 bt">
              The Hosted Fields product is a part of Braintree’s offerings that
              has specific use cases: it’s most useful to merchants who are
              looking for highly customizable payment forms to use for desktop
              and mobile websites. However, existing Hosted Fields content in
              the developer docs lacked clarity and immediately exposed users to
              highly technical integration details, leading to a lack of
              interest in the product.
            </p>
            <p class="g-col-1-6 lh-1-75 bt">
              By creating a new landing page focusing on demonstrating unique
              product value and slowly incorporating technical jargon, I lowered
              the bounce rate for users reading about Hosted Fields to 9%,
              beating the site avg. by almost 40%.
            </p>
            <br /> <br />
            <br />
            <br />
            <br />
            <h2 class="g-col-1-6">My Role</h2>
            <p class="g-col-1-6 lh-1-75 bt">
              I drove this project while collaborating with content strategists
              from the Documentation team as well as designers and developers
              from the Sites team. To do this, I went through several iterations
              of writing new copy, created new visuals, and shipped an MVP
              version of the page built with HTML/CSS.
            </p>
            <hr />
            <h2 class="g-col-1-6">Approach</h2>
            <p class="g-col-1-6 lh-1-75 bt">
              I drove this project while collaborating with content strategists
              from the Documentation team as well as designers and developers
              from the Sites team. To do this, I went through several iterations
              of writing new copy, created new visuals, and shipped an MVP
              version of the page built with HTML/CSS.
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
