"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Pause before the pressure decides for you.",
    body: "Let the call go to voicemail. Stop replying to the message. A real bank, government office, or family member will still be there after you take a minute.",
  },
  {
    title: "Check through a route you already trust.",
    body: "Use the number on your card, a saved contact, or an address you type yourself. Do not use the number or link supplied by the person asking for money or a code.",
  },
  {
    title: "Bring another person into the decision.",
    body: "Call a family member, neighbor, caregiver, or staff member. Scammers depend on isolation. A second person can help check the story before anything moves.",
  },
];

const screens = [
  { state: "Incoming call", title: "Unknown caller", detail: "Claims your account closes today", action: "Let it ring" },
  { state: "Independent check", title: "Call the bank yourself", detail: "Use the number printed on your card", action: "Open saved number" },
  { state: "Trusted contact", title: "Calling Maya", detail: "Tell someone before sending money", action: "Call now" },
];

export default function SafetySequence() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setActiveStep(Number((visible.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-28% 0px -42%", threshold: [0.2, 0.5, 0.8] },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const screen = screens[activeStep];

  return (
    <section id="how-it-works" className="safety-sequence" aria-labelledby="sequence-title">
      <div className="safety-sequence__intro">
        <h2 id="sequence-title">A three-part habit for the moment something feels off.</h2>
        <p>The same routine works for calls, texts, links, payment requests, and verification codes.</p>
      </div>
      <div className="safety-sequence__layout">
        <div className="safety-sequence__stage" aria-live="polite">
          <div className={`sequence-phone sequence-phone--${activeStep + 1}`}>
            <div className="sequence-phone__top"><span>9:41</span><span aria-hidden="true">●●●</span></div>
            <div className="sequence-phone__status">{screen.state}</div>
            <div className="sequence-phone__symbol" aria-hidden="true">{activeStep === 0 ? "?" : activeStep === 1 ? "✓" : "M"}</div>
            <h3>{screen.title}</h3>
            <p>{screen.detail}</p>
            <div className="sequence-phone__action">{screen.action}</div>
            <div className="sequence-phone__steps" aria-hidden="true">
              {steps.map((step, index) => <span key={step.title} className={index <= activeStep ? "is-active" : ""} />)}
            </div>
          </div>
          <p className="sequence-caption">The phone changes as you move through the routine.</p>
        </div>
        <div className="safety-sequence__steps">
          {steps.map((step, index) => (
            <article
              key={step.title}
              ref={(node) => { stepRefs.current[index] = node; }}
              data-step={index}
              className={index === activeStep ? "is-active" : ""}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
