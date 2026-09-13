"use client";

import { useEffect, useRef } from "react";

type HeroVariant = "about" | "program" | "resources" | "partners";

type AnimatedPageHeroProps = {
  title: string;
  intro: string;
  variant: HeroVariant;
};

const heroLabels: Record<HeroVariant, string[]> = {
  about: ["What are they asking for?", "Can I check another way?", "Who can I call?"],
  program: ["Before", "Practice", "Discuss", "Take home"],
  resources: ["Call checklist", "Message checklist", "Recovery steps"],
  partners: ["Senior communities", "Libraries", "Care teams", "Financial institutions"],
};

export default function AnimatedPageHero({ title, intro, variant }: AnimatedPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduced) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height)));
        hero.style.setProperty("--page-hero-progress", progress.toFixed(3));
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <section ref={heroRef} className={`animated-page-hero animated-page-hero--${variant}`}>
      <div className="animated-page-hero__copy">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>

      <div className="animated-page-hero__visual" aria-hidden="true">
        {variant === "about" && (
          <div className="about-question-stack">
            {heroLabels.about.map((label) => <span key={label}>{label}</span>)}
          </div>
        )}

        {variant === "program" && (
          <div className="program-path">
            {heroLabels.program.map((label, index) => (
              <span key={label}>{index + 1}<small>{label}</small></span>
            ))}
          </div>
        )}

        {variant === "resources" && (
          <div className="resource-paper-stack">
            {heroLabels.resources.map((label) => (
              <span key={label}><small>One-page guide</small><strong>{label}</strong></span>
            ))}
          </div>
        )}

        {variant === "partners" && (
          <div className="partner-map">
            <svg viewBox="0 0 600 380" role="presentation">
              <path d="M300 190 C220 130 175 95 92 88 M300 190 C390 126 445 100 528 88 M300 190 C220 245 175 286 92 295 M300 190 C392 246 445 282 528 295" />
            </svg>
            <span className="partner-map__center">Shield Our Elders</span>
            {heroLabels.partners.map((label, index) => <span key={label} className={`partner-map__node partner-map__node--${index + 1}`}>{label}</span>)}
          </div>
        )}
      </div>
    </section>
  );
}
