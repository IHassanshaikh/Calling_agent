import React from "react";
import "../css/HowItWorks.css";
import video from "../assets/Maskgroup.png";
import arrow from "../assets/arrow.png";

const HowItWorks = () => {
  return (
    <section className="working-section">
      <div className="working-section1">
        <div>
          <p>
            Experience what an AI agent sounds like natural, professional, and
            fully customizable to your brand
          </p>
        </div>
        <h1>Empowering The Future With AI</h1>
      </div>
      <div className="working-section2">
        <section className="working-section2-box1">
          <h2>Why Replace Your Receptionist?</h2>
          <p>
            Human receptionists are expensive, inconsistent, and limited to
            working hours.
            <br />
            AI calling agents handle every call — faster, cheaper, and around
            the clock.
          </p>
          <button>See How It Works</button>
        </section>
        <section className="working-section2-box2">
          <img src={video} alt="video" />
          <div className="working-box2-card">
            <span>
              <h4>Conversational AI that feels natural, at scale</h4>
              <p>
                Human-like conversations, powered by a global Conversational AI
                platform
              </p>
            </span>
            <span>
              <h4>Low latency, real flow</h4>
              <p>
                Sub-100 ms turnaround keeps dialogues fluid—no <br/> robotic pauses,
                no delays.
              </p>
              <img className="arr-button2" src={arrow} alt="arrow" />
            </span>
          </div>
        </section>
      </div>
      <div className="working-section3">
        <h3>Hear the Future of Customer Interaction</h3>
        <div className="working-section3-circle">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
