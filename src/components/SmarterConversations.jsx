import React from "react";
import "../css/SmarterConversations.css";

const SmarterConversations = () => {
  return (
    <section className="smart-section">
      <div className="smart-container">
        <h2 className="smart-title">
          Smarter Conversations <br /> Seamless Operations
        </h2>
        <p className="smart-subtitle">
          Our AI agents handle every step of customer <br/>communication — from first contact to final booking.
        </p>

        <div className="smart-steps">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Set Up Your AI Agent</h3>
            <p>
              Configure your AI's voice, personality, and conversation flows using our intuitive dashboard.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Train & Customize</h3>
            <p>
              Upload your business data, FAQs, and scripts to train the AI on your specific needs.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Launch & Monitor</h3>
            <p>
              Deploy your AI agent and track performance in real-time with detailed analytics.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h3>Optimize & Scale</h3>
            <p>
              Continuously improve based on insights and scale effortlessly as your business grows.
            </p>
          </div>
        </div>

        <div className="smart-footer">
          <h3>Built for Every Business Need</h3>
          <p>
            See how AI calling transforms different aspects of your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmarterConversations;
