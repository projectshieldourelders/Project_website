"use client";

import { Icon } from "@iconify/react";
import chevronBack from "@iconify/icons-ion/chevron-back";
import chevronForward from "@iconify/icons-ion/chevron-forward";
import { useEffect, useState } from "react";

const slides = [
  {
    label: "Read the request",
    quote: "I need the six-digit code we just sent so I can secure your account.",
    prompt: "What does the caller gain if you share it?",
    answer: "A verification code can let another person enter an account, reset a password, or approve a transfer.",
  },
  {
    label: "Break the urgency",
    quote: "Stay on the line. This has to be fixed before the account closes.",
    prompt: "Does this decision really belong to the caller?",
    answer: "No. Ending the call removes their pressure and gives you time to use an independent contact method.",
  },
  {
    label: "Verify independently",
    quote: "Call me back at this direct number if we are disconnected.",
    prompt: "Which phone number should you use instead?",
    answer: "Use the number printed on your bank card, shown in the official app, or saved before this call began.",
  },
  {
    label: "Choose the next step",
    quote: "Do not tell anyone about this investigation.",
    prompt: "Who could hear the story before you act?",
    answer: "A trusted person can help you call the bank, preserve evidence, block the caller, or make a report.",
  },
];

export default function WorkshopDeck() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setActive((value) => Math.max(0, value - 1));
      if (event.key === "ArrowRight") setActive((value) => Math.min(slides.length - 1, value + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="practice-board" role="region" aria-label="Interactive workshop example">
      <div className="practice-board__rail">
        {slides.map((item, index) => (
          <button key={item.label} type="button" aria-current={active === index ? "step" : undefined} onClick={() => setActive(index)}>
            <i aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="practice-board__screen" key={slide.label} aria-live="polite">
        <div className="practice-board__message">
          <blockquote>“{slide.quote}”</blockquote>
        </div>
        <div className="practice-board__question">
          <h3>{slide.prompt}</h3>
          <p>{slide.answer}</p>
        </div>
      </div>

      <div className="practice-board__footer">
        <button type="button" aria-label="Previous example" title="Previous example" disabled={active === 0} onClick={() => setActive((value) => value - 1)}><Icon icon={chevronBack} /></button>
        <span>{active + 1} of {slides.length}</span>
        <button type="button" aria-label="Next example" title="Next example" disabled={active === slides.length - 1} onClick={() => setActive((value) => value + 1)}><Icon icon={chevronForward} /></button>
      </div>
    </div>
  );
}
