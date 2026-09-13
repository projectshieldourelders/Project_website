"use client";

import { useState } from "react";

const decisions = [
  {
    key: "pause",
    tab: "Take a minute",
    title: "Do not let the caller rush you.",
    body: "There is no need to make a decision while someone is pressuring you. You can end the call before sending money, sharing account information, or giving out a password or verification code.",
    phoneTitle: "Call ended",
    phoneDetail: "No information shared",
    action: "You are in control",
  },
  {
    key: "check",
    tab: "Verify the request",
    title: "Find the organization’s contact information yourself.",
    body: "Do not use the phone number, website, or contact information the caller gives you. Use the number printed on your card, shown on an official statement, or published on the organization’s official website.",
    phoneTitle: "Shield Community Bank",
    phoneDetail: "Number from the back of your card",
    action: "Official number found",
  },
  {
    key: "tell",
    tab: "Ask someone else",
    title: "Get a second opinion before doing anything.",
    body: "A family member, friend, neighbor, caregiver, or staff member can help you check the story. A legitimate organization will give you time to verify what it is telling you.",
    phoneTitle: "Maya",
    phoneDetail: "Trusted contact",
    action: "Ready to call",
  },
];

export default function SafetySequence() {
  const [active, setActive] = useState(0);
  const decision = decisions[active];

  return (
    <section id="how-it-works" className="decision-demo">
      <div className="decision-demo__intro">
        <h2>What would you do after a suspicious call?</h2>
        <span>There is no need to make a decision while someone is pressuring you.</span>
      </div>

      <div className="decision-demo__stage">
        <div className="decision-demo__controls" role="tablist" aria-label="Ways to respond to a suspicious call">
          {decisions.map((item, index) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="decision-panel"
              onClick={() => setActive(index)}
            >
              <span>{item.tab}</span>
              <i aria-hidden="true" />
            </button>
          ))}
        </div>

        <div id="decision-panel" className="decision-demo__panel" role="tabpanel" key={decision.key}>
          <div className="decision-demo__phone" aria-hidden="true">
            <div className="decision-demo__phone-top"><span>9:41</span><span>● ● ●</span></div>
            <div className={`decision-demo__phone-mark decision-demo__phone-mark--${decision.key}`}>
              {decision.key === "pause" ? "×" : decision.key === "check" ? "✓" : "M"}
            </div>
            <strong>{decision.phoneTitle}</strong>
            <small>{decision.phoneDetail}</small>
            <span className="decision-demo__phone-action">{decision.action}</span>
          </div>
          <article>
            <h3>{decision.title}</h3>
            <p>{decision.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
