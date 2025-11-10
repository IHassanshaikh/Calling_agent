import React, { useEffect, useRef, useState } from "react";
import "../css/About.css";
import globe from "../assets/globe.png";
import subtract from "../assets/Subtract2.png";
import round from "../assets/round.png";

export default function About() {
  const sectionRefs = useRef({});
  const [visibleSections, setVisibleSections] = useState({});

  const registerSection = (key) => (el) => {
    if (el) {
      el.dataset.section = key;
      sectionRefs.current[key] = el;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const key = target.dataset.section;
            setVisibleSections((prev) => ({ ...prev, [key]: true }));
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const highlightMetrics = [
    { label: "Businesses automated", value: "200+" },
    { label: "AI-led conversations", value: "2.7M" },
    { label: "Avg. satisfaction", value: "4.9/5" },
  ];

  const pillars = [
    {
      title: "Human-first conversations",
      copy:
        "We obsess over tone, pacing, and empathy cues so every agent sounds like a seasoned pro.",
    },
    {
      title: "Operational clarity",
      copy:
        "Dashboards, transcripts, and live escalation make it easy for teams to trust the automation.",
    },
    {
      title: "Continuous learning",
      copy:
        "Each call trains domain-specific models, allowing us to improve intent coverage week over week.",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Idea to prototype",
      copy:
        "We began as an internal assistant for a distributed support team that needed night-shift coverage.",
    },
    {
      year: "2022",
      title: "Closed beta",
      copy:
        "Opened the platform to healthcare and real-estate teams, layering CRM syncing and compliance tooling.",
    },
    {
      year: "2024",
      title: "HumanCall AI stack",
      copy:
        "Launched multilingual voice, intent fallback routing, and instant calendar orchestration at scale.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="eyebrow">Who we are</p>
          <h1>
            A fully-remote team building voice agents that feel{" "}
            <span>genuinely human.</span>
          </h1>
          <p className="lede">
            HumanCall blends conversation design, automation playbooks, and
            on-call experts to replace high-volume phone workflows without
            sacrificing warmth.
          </p>

          <div className="about-hero__metrics">
            {highlightMetrics.map((metric) => (
              <article key={metric.label}>
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-hero__visual">
          <img
            className="about-hero__passive"
            src={subtract}
            alt="gradient arc"
          />
          <span className="about-hero__halo" />
          <img className="about-hero__globe" src={globe} alt="globe" />
          <img className="about-hero__orb" src={round} alt="orbital accent" />
        </div>
      </section>

      <section
        className={`about-section fade-section ${
          visibleSections.mission ? "is-visible" : ""
        }`}
        ref={registerSection("mission")}
      >
        <div className="about-section__header">
          <p className="eyebrow">Our mission</p>
          <h2>Deliver reception-quality experiences at machine scale.</h2>
          <p>
            Every workflow we automate passes through conversation designers,
            QA listeners, and data scientists. That trifecta helps us mirror the
            nuance of your best team members—then give them superpowers.
          </p>
        </div>

        <div className="about-highlight-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="about-card">
              <div className="pulse-badge" />
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`about-section fade-section ${
          visibleSections.timeline ? "is-visible" : ""
        }`}
        ref={registerSection("timeline")}
      >
        <div className="about-section__header compact">
          <p className="eyebrow">Milestones</p>
          <h2>From after-hours coverage to the always-on AI receptionist.</h2>
        </div>

        <div className="about-timeline">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="timeline-row">
              <div className="timeline-year">
                <span>{milestone.year}</span>
                <div className="timeline-dot" />
              </div>
              <div className="timeline-body">
                <h3>{milestone.title}</h3>
                <p>{milestone.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`about-section fade-section ${
          visibleSections.vision ? "is-visible" : ""
        }`}
        ref={registerSection("vision")}
      >
        <div className="about-cta">
          <div>
            <p className="eyebrow">Looking ahead</p>
            <h2>We’re designing the future of proactive, human-grade AI ops.</h2>
            <p>
              Real-time sentiment routing, autonomous appointment recovery, and
              multilingual outreach are already shipping in pilot. Let’s build
              the next breakthrough together.
            </p>
          </div>
          <div className="cta-actions">
            <button className="cta-primary">Book a discovery call</button>
            <button className="cta-secondary">Download the playbook</button>
          </div>
        </div>
      </section>
    </div>
  );
}
