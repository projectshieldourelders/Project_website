"use client";

import { Icon } from "@iconify/react";
import chevronBack from "@iconify/icons-ion/chevron-back";
import chevronForward from "@iconify/icons-ion/chevron-forward";
import { useRef, useState } from "react";

const slides = [
  { title: "Notice", prompt: "What are they asking you to do?", detail: "Look for requests involving money, passwords, verification codes, personal information, remote access, or secrecy.", color: "#e7efe9" },
  { title: "Pause", prompt: "Do you really have to act right now?", detail: "Scammers often try to make something feel urgent. Take a moment before answering, clicking, paying, or sharing information.", color: "#f6f1e7" },
  { title: "Check", prompt: "Can you confirm the story another way?", detail: "Call a number you already trust, open the official app yourself, or go directly to the organization’s website.", color: "#dcece7" },
  { title: "Tell someone", prompt: "Who can help you decide what to do next?", detail: "Talk to a family member, friend, caregiver, staff member, or another person you trust before you block, report, or pay.", color: "#f2dfd8" },
];

const WorkshopDeck = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const moveTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    const track = trackRef.current;
    const slide = track?.children[nextIndex] as HTMLElement | undefined;
    if (!track || !slide) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveSlide(nextIndex);
  };

  const updateActiveSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const positions = Array.from(track.children).map((child) => Math.abs((child as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft));
    setActiveSlide(positions.indexOf(Math.min(...positions)));
  };

  return (
    <div className="workshop-deck" role="region" aria-roledescription="carousel" aria-label="Four steps in a practice round">
      <button type="button" className="workshop-deck__arrow workshop-deck__arrow--previous" aria-label="Previous slide" title="Previous slide" disabled={activeSlide === 0} onClick={() => moveTo(activeSlide - 1)}>
        <Icon icon={chevronBack} aria-hidden="true" />
      </button>

      <div
        ref={trackRef}
        className="workshop-deck__track"
        tabIndex={0}
        onScroll={updateActiveSlide}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveTo(activeSlide - 1);
          if (event.key === "ArrowRight") moveTo(activeSlide + 1);
        }}
      >
        {slides.map((slide, index) => (
          <article key={slide.title} className={`workshop-deck__slide ${activeSlide === index ? "is-active" : ""}`} style={{ backgroundColor: slide.color }} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}>
            <span className="font-display text-2xl">0{index + 1}</span>
            <div>
              <h3 className="font-display text-5xl sm:text-6xl">{slide.title}</h3>
              <p className="font-display mt-6 max-w-3xl text-2xl leading-tight sm:text-3xl">{slide.prompt}</p>
              <p className="mt-6 max-w-2xl text-xl leading-8">{slide.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <button type="button" className="workshop-deck__arrow workshop-deck__arrow--next" aria-label="Next slide" title="Next slide" disabled={activeSlide === slides.length - 1} onClick={() => moveTo(activeSlide + 1)}>
        <Icon icon={chevronForward} aria-hidden="true" />
      </button>

      <p className="workshop-deck__status" aria-live="polite">Slide {activeSlide + 1} of {slides.length}</p>
      <div className="workshop-deck__progress" aria-hidden="true"><span style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }} /></div>
    </div>
  );
};

export default WorkshopDeck;
