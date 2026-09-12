"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const signalDepths = [18, 11, 15, 9];

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const chips = Array.from(hero.querySelectorAll<HTMLElement>(".signal-chip"));
    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;

      chips.forEach((chip, index) => {
        const depth = signalDepths[index] ?? 10;
        chip.style.setProperty("--shift-x", `${(x / bounds.width) * depth}px`);
        chip.style.setProperty("--shift-y", `${(y / bounds.height) * depth}px`);
      });
    };

    const resetPointer = () => {
      chips.forEach((chip) => {
        chip.style.setProperty("--shift-x", "0px");
        chip.style.setProperty("--shift-y", "0px");
      });
    };

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height * 0.72)));
        hero.style.setProperty("--hero-exit", progress.toFixed(3));
        hero.style.setProperty("--hero-console-y", `${progress * -34}px`);
        hero.style.setProperty("--hero-console-scale", `${1 - progress * 0.035}`);
        hero.style.setProperty("--hero-signal-y", `${progress * 90}px`);
        hero.style.setProperty("--hero-signal-scale", `${1 - progress * 0.45}`);
        hero.style.setProperty("--hero-signal-opacity", `${1 - progress}`);
      });
    };

    hero.addEventListener("pointermove", updatePointer);
    hero.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="home-hero">
      <div className="home-hero__signals" aria-hidden="true">
        <span className="signal-chip signal-chip--call"><i />Unknown caller</span>
        <span className="signal-chip signal-chip--code"><i />Verification code</span>
        <span className="signal-chip signal-chip--money"><i />Urgent payment</span>
        <span className="signal-chip signal-chip--message"><i />Delivery message</span>
      </div>

      <div className="home-hero__copy">
        <h1>A calmer way to handle suspicious calls and messages.</h1>
        <p>Shield Our Elders teaches people how to pause, check the story, and involve someone they trust before money or personal information changes hands.</p>
        <div className="home-hero__actions">
          <Link href="/program" className="primary-button">See the workshop</Link>
          <Link href="/resources" className="secondary-button">Get help right now</Link>
        </div>
      </div>

      <div className="hero-console" aria-label="Example suspicious call review">
        <div className="hero-console__header">
          <span>Call review</span>
          <span className="hero-console__live"><i />Active example</span>
        </div>
        <div className="hero-console__body">
          <div className="hero-console__caller">
            <span className="hero-console__avatar">?</span>
            <div><strong>Unknown caller</strong><small>“Your account will close today.”</small></div>
          </div>
          <div className="hero-console__checks">
            <span><i>1</i>Unsolicited contact</span>
            <span><i>2</i>Pressure to act now</span>
            <span><i>3</i>Request for a private code</span>
          </div>
          <div className="hero-console__result"><span>Safer next step</span><strong>Hang up and call the number on your card.</strong></div>
        </div>
      </div>
    </section>
  );
}
