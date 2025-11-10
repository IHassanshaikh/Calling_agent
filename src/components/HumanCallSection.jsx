import React from "react";
import "../css/HumanCallSection.css";
import excluded from "../assets/Exclude.png";
import group from "../assets/Group.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import globe from "../assets/globe.png";

const HumanCallSection = () => {
  return (
    <section className="human-section">
      <div className="human-section1">
        {/* --- Card 1 --- */}
        <div className="h-sect-card1">
          <img src={excluded} alt="excluded" className="excluded-icon" />
          <h3>
            Out bound
            <br />
            Sales Calls
          </h3>
          <p className="trial">
            14 days <span>trial</span>
            <br />
            <span className="after-text">after - $5/month</span>
          </p>
        </div>

        {/* --- Card 2 --- */}
        <div className="h-sect-card2">
          <h2>
            <span>10</span>k
          </h2>
          <p>happy users</p>
          <div className="user-images">
            <img src={user1} alt="user1" />
            <img src={group} alt="group" />
            <img src={user2} alt="user2" />
          </div>
        </div>

        {/* --- Card 3 --- */}
        <div className="h-sect-card3">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>

      {/* Do not touch */}
      <div className="human-section2">
        <div className="hum-sect-card1">
          <span>
            <img src={excluded} alt="excluded" />
            <p>HumanCall</p>
          </span>
          <h2>Ready to Replace Your Receptionist?</h2>
        </div>
        <img className="earth-globe" src={globe} alt="globe" />
        <div className="hum-sect-card2">
          <div className="sect-card2-left">
            <h4>Lead Qualification</h4>
            <p>
              AI filters high-quality leads and syncs them with your CRM
              instantly.
            </p>
          </div>
          <div className="sect-card2-right">
            <h4>CRM Integration Support</h4>
            <p>
              Connects directly to HubSpot, Salesforce, or Zoho — no manual data
              entry needed.
            </p>
          </div>
        </div>
      </div>

      <div className="human-section3">
        <div className="h-sect3-card1">
          <label className="custom-switch">
            <input type="checkbox" />
            <span className="slider">
              <span className="thumb"></span>
            </span>
          </label>
        </div>

        <div className="h-sect3-card2">
          <h2>
            <span>10</span>k
          </h2>
          <p>calls made</p>
        </div>

        <div className="h-sect3-card3">
          <h2>Inbound Support</h2>
          <p>
            Never miss a call again. Provide instant answers, routing, and
            scheduling 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanCallSection;
