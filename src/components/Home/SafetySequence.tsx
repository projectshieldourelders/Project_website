"use client";

import { useState } from "react";

const decisions = [
  {
    key: "pause",
    tab: "Pause the call",
    title: "Give yourself room to think.",
    body: "Let an unknown call go to voicemail, or end a conversation that has become pushy. A real bank or government office will not punish you for taking time to check.",
    phoneTitle: "Call ended",
    phoneDetail: "No information shared",
    action: "You are in control",
  },
  {
    key: "check",
    tab: "Check the story",
    title: "Use contact details you already trust.",
    body: "Open the bank’s official app or call the number printed on your card. Do not call back using a number supplied by the person who contacted you.",
    phoneTitle: "Shield Community Bank",
    phoneDetail: "Number from the back of your card",
    action: "Official number found",
  },
  {
    key: "tell",
    tab: "Bring in someone else",
    title: "Say the request out loud to another person.",
    body: "A family member, friend, neighbor, caregiver, or staff member can help you notice pressure and choose the next step without the caller listening.",
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
        <h2>What would you do after hanging up?</h2>
        <span>Choose a step. The example changes with you.</span>
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
