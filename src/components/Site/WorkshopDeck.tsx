"use client";

import { Icon } from "@iconify/react";
import chevronBack from "@iconify/icons-ion/chevron-back";
import chevronForward from "@iconify/icons-ion/chevron-forward";
import { useRef, useState } from "react";

const slides = [
  { title: "Notice", prompt: "What is the person asking for?", detail: "Listen for money, passwords, codes, remote access, or secrecy.", color: "#f3b83f" },
  { title: "Pause", prompt: "What happens if we wait?", detail: "A legitimate organization will let you stop and verify before acting.", color: "#b7a7e8" },
  { title: "Check", prompt: "Which trusted source can confirm it?", detail: "Use a number, app, or website you already know instead of one the sender provided.", color: "#dce9f7" },
  { title: "Act", prompt: "What is the safer next step?", detail: "Block, report, call a trusted person, or contact the organization directly.", color: "#f47b6a" },
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
          <article key={slide.title} className="workshop-deck__slide" style={{ backgroundColor: slide.color }} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}>
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
    </div>
  );
};

export default WorkshopDeck;
