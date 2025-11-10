import React from "react";
import "../css/Hero.css";
import aiBot from "../assets/aibot.png"; // left big image
import smallBot from "../assets/smallbot.png"; // right bottom image
import rocket from "../assets/rocket.png"; // small rocket image
import automationIcon from "../assets/automation.png"; // small circle icon
import speaker from "../assets/speaker.png"; // small speaker icon
import flash from "../assets/flash.png"; // small flash icon
import round from "../assets/round.png"; // small round icon
import subtract from "../assets/Subtract2.png"; // background design
import Demobutton from "./demoButton.jsx"; // demo button image

export default function Hero() {  
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-left-sect1">
          <span className="robot-pic">
            <img src={aiBot} alt="aiBot" />
          </span>
          <span className="hero-left-sect1-text">
            <span className="blue-circle"></span>
            <p>
              powered by
              <br /> advanced AI <br />
              technology
            </p>
          </span>
          <img className="bg-design2" src={subtract} alt="subtract" />
        </div>

        <div className="hero-left-sect2">
          <span className="rocket">
            <img src={rocket} alt="rocket" />
          </span>
          <span className="hero-left-sect2-text">
            <img src={automationIcon} alt="automationIcon" />
            <p>
              Simple Setup.
              <br /> Powerful
              <br /> Automation.
            </p>
          </span>
          <span className="round-animation">
            <img src={round} alt="round" />
          </span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-textbox">
          <h1>
            AI Agents That <br />
            <span>Talk, Sell, and Schedule</span> — Like Real Humans
          </h1>
          <p className="subtext">
            Replace your call team with intelligent voice agents that handle
            sales, support, and scheduling — instantly, naturally, and at a
            fraction of the cost.
          </p>
          <div className="hero-textbox-footer">
            {/* <button className="demo-btn">Hear the Demo</button> */}
            <Demobutton />
            <span className="hero-textbox-footericons">
              <img src={speaker} alt="speaker" />
              <img src={flash} alt="flash" />
            </span>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stats-content">
            <h3>Human Receptionist</h3>
            <p className="hero-stats-desc">
              Now answering calls for clinics, real estate, and service
              businesses across the
              <br /> U.S. & U.K
            </p>

            <div className="hero-stats-numbers">
              <div className="stat">
                <h3>10k</h3>
                <p>Calls Made</p>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <h3>200+</h3>
                <p>Companies</p>
              </div>
            </div>
          </div>

          <div className="small-bot">
            <img src={smallBot} alt="Small Bot" />
          </div>
  <span className="display-none  round-animation">
              <img src={round} alt="round" />
            </span>
        </div>
      </div>
    </section>
  );
}
