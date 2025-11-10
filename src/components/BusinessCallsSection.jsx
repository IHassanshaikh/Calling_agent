import React from "react";
import "../css/BusinessCallsSection.css";
import rightarrow from "../assets/right-arrow.svg";

export default function BusinessCallsSection() {
  return (
    <section className="business-section">
      <h1>Ready to Transform Your<br />Business Calls?</h1>
      <p>
        Join hundreds of companies already using AI to automate their phone
        communications. Start your free trial today — no credit card required.
      </p>

      <div className="btn-group">
        <button className="btn-primary">
          <span>Start Free Trials</span> <img src={rightarrow} alt="rightarrow" className="arrow"/>
        </button>
        <button className="btn-secondary">Hear the Demo</button>
      </div>
    </section>
  );
}
