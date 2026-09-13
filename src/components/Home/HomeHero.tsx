"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--hero-pointer-x", `${x * 12}px`);
      hero.style.setProperty("--hero-pointer-y", `${y * 9}px`);
    };

    const resetPointer = () => {
      hero.style.setProperty("--hero-pointer-x", "0px");
      hero.style.setProperty("--hero-pointer-y", "0px");
    };

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height * 0.72)));
        hero.style.setProperty("--hero-exit", progress.toFixed(3));
        hero.style.setProperty("--hero-console-y", `${progress * -28}px`);
        hero.style.setProperty("--hero-console-scale", `${1 - progress * 0.025}`);
        hero.style.setProperty("--hero-copy-y", `${progress * -16}px`);
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
      <div className="home-hero__copy">
        <h1>A simple way to deal with suspicious calls and messages.</h1>
        <p>Shield Our Elders helps older adults recognize scams, double-check suspicious requests, and know what to do before sending money or sharing personal information.</p>
        <div className="home-hero__actions">
          <Link href="/program" className="primary-button">See the workshop</Link>
          <Link href="/resources" className="secondary-button">Get help now</Link>
        </div>
      </div>

      <div className="hero-console" aria-label="Example suspicious call review">
        <div className="hero-console__header">
          <span>Unknown caller</span>
          <span className="hero-console__live"><i />Call review</span>
        </div>
        <div className="hero-console__body">
          <div className="hero-console__caller">
            <span className="hero-console__avatar">?</span>
            <div><strong>Unknown caller</strong><small>“Your account will close today.”</small></div>
          </div>
          <div className="hero-console__checks">
            <span><i>1</i>You weren’t expecting the call</span>
            <span><i>2</i>They want you to act immediately</span>
            <span><i>3</i>They ask for a private code</span>
          </div>
          <div className="hero-console__result"><span>What to do</span><strong>Hang up and call the bank using the number printed on your card.</strong></div>
        </div>
        <span className="hero-console__scan" aria-hidden="true" />
      </div>
    </section>
  );
}
