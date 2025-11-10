"use client";
import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../css/RobotSection.css";

export default function Robotsection() {
  const splineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = -(event.clientY / window.innerHeight - 0.5) * 2;

      const spline = splineRef.current;
      if (!spline) return;

      const head = spline.findObjectByName("Head");
      const leftArm = spline.findObjectByName("LeftArm");
      const rightArm = spline.findObjectByName("RightArm");

      if (head) head.rotation.y = x * 0.8;
      if (leftArm) leftArm.rotation.x = y * 0.6;
      if (rightArm) rightArm.rotation.x = -y * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cardData = [
    {
      id: 1,
      title: "Real-time Processing",
      description: "Lightning-fast responses powered by advanced AI algorithms",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Natural Conversations",
      description: "Human-like interactions that feel natural and engaging",
      icon: "💬"
    },
    {
      id: 3,
      title: "24/7 Availability",
      description: "Always available to assist your customers anytime",
      icon: "🕐"
    },
    {
      id: 4,
      title: "Smart Learning",
      description: "Continuously improves with every interaction",
      icon: "🧠"
    }
  ];

  return (
    <section className="robot-section">
      <div className="robot-container">
        {/* Left Cards */}
        <div className="cards-column left-cards">
          <div className="card">
            <div className="card-icon">{cardData[0].icon}</div>
            <h3 className="card-title">{cardData[0].title}</h3>
            <p className="card-description">{cardData[0].description}</p>
          </div>
          <div className="card">
            <div className="card-icon">{cardData[1].icon}</div>
            <h3 className="card-title">{cardData[1].title}</h3>
            <p className="card-description">{cardData[1].description}</p>
          </div>
        </div>

        {/* Center Robot */}
        <div className="robot-center">
          <Spline
            ref={splineRef}
            scene="https://prod.spline.design/MtuRRjZsKjgV4hTM/scene.splinecode"
          />
        </div>
{/* "https://prod.spline.design/tT0L7qnN3RGZ4eSS/scene.splinecode */}
        {/* Right Cards */}
        <div className="cards-column right-cards">
          <div className="card">
            <div className="card-icon">{cardData[2].icon}</div>
            <h3 className="card-title">{cardData[2].title}</h3>
            <p className="card-description">{cardData[2].description}</p>
          </div>
          <div className="card">
            <div className="card-icon">{cardData[3].icon}</div>
            <h3 className="card-title">{cardData[3].title}</h3>
            <p className="card-description">{cardData[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
