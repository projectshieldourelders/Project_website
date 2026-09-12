"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Pause",
    title: "Let the pressure pass.",
    body: "A real bank, government office, or family member will still be there after you take a minute. Let an unfamiliar call go to voicemail and stop replying to a message that is rushing you.",
    detail: "Unknown number",
    subdetail: "Claims your account closes today",
    action: "Let it ring",
  },
  {
    label: "Verify",
    title: "Use a route you already trust.",
    body: "Call the number printed on your card, use a saved contact, or type the organization’s address yourself. Do not use the number or link supplied by the person asking for money or a code.",
    detail: "Shield Community Bank",
    subdetail: "Number saved from the back of your card",
    action: "Call saved number",
  },
  {
    label: "Tell someone",
    title: "Bring in a second person.",
    body: "Call a family member, neighbor, caregiver, or staff member before anything moves. Scammers depend on isolation; another person can help check the story while you stay off the original call.",
    detail: "Maya",
    subdetail: "Trusted contact",
    action: "Call Maya",
  },
];

const sceneRanges = [
  [0.1, 0.42],
  [0.36, 0.66],
  [0.6, 0.88],
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (start: number, end: number, value: number) => {
  const position = clamp((value - start) / Math.max(0.001, end - start));
  return position * position * (3 - 2 * position);
};

export default function SafetySequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(-1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMotion = window.matchMedia("(min-width: 801px)");
    if (reducedMotion.matches || !desktopMotion.matches) return;

    const scenes = Array.from(section.querySelectorAll<HTMLElement>(".sequence-scene"));
    const intro = section.querySelector<HTMLElement>(".sequence-intro-scene");
    const outro = section.querySelector<HTMLElement>(".sequence-outro-scene");
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = clamp(-bounds.top / travel);
        const draw = smoothstep(0.015, 0.16, progress);
        const introExit = smoothstep(0.075, 0.19, progress);
        const outroEnter = smoothstep(0.81, 0.93, progress);

        section.style.setProperty("--sequence-draw", draw.toFixed(3));
        section.style.setProperty("--sequence-rotate", `${(1 - draw) * 5}deg`);
        section.style.setProperty("--sequence-scale", `${0.9 + draw * 0.1}`);
        section.style.setProperty("--sequence-progress", `${progress * 100}%`);

        if (intro) {
          intro.style.opacity = `${1 - introExit}`;
          intro.style.transform = `translate3d(0, ${introExit * -24}px, 0) scale(${1 - introExit * 0.04})`;
        }

        scenes.forEach((scene, index) => {
          const [start, end] = sceneRanges[index];
          const enter = smoothstep(start, start + 0.065, progress);
          const leave = 1 - smoothstep(end - 0.065, end, progress);
          const opacity = Math.min(enter, leave);
          const center = (start + end) / 2;
          const offset = clamp(Math.abs(progress - center) / ((end - start) / 2));
          const direction = progress < center ? 1 : -1;
          scene.style.opacity = opacity.toFixed(3);
          scene.style.transform = `translate3d(0, ${direction * offset * 32}px, 0) scale(${0.975 + opacity * 0.025})`;
          scene.style.pointerEvents = opacity > 0.75 ? "auto" : "none";
        });

        if (outro) {
          outro.style.opacity = `${outroEnter}`;
          outro.style.transform = `translate3d(0, ${(1 - outroEnter) * 28}px, 0) scale(${0.97 + outroEnter * 0.03})`;
        }

        const nextScene = progress < 0.14 ? -1 : progress < 0.39 ? 0 : progress < 0.63 ? 1 : progress < 0.86 ? 2 : 3;
        setActiveScene((current) => current === nextScene ? current : nextScene);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="safety-sequence" data-scene={activeScene}>
      <div className="safety-sequence__sticky">
        <div className="sequence-toolbar">
          <span>How the safety check works</span>
          <span>{activeScene < 0 ? "Overview" : activeScene > 2 ? "Ready" : `0${activeScene + 1} / 03`}</span>
        </div>

        <div className="sequence-frame">
          <span className="sequence-frame__line sequence-frame__line--top" />
          <span className="sequence-frame__line sequence-frame__line--right" />
          <span className="sequence-frame__line sequence-frame__line--bottom" />
          <span className="sequence-frame__line sequence-frame__line--left" />

          {steps.map((step, index) => (
            <div key={step.label} aria-hidden="true" className={`sequence-node sequence-node--${index + 1} ${activeScene === index ? "is-active" : ""}`}>
              <i /><span>{step.label}</span>
            </div>
          ))}

          <div className="sequence-intro-scene" aria-hidden={activeScene !== -1}>
            <p>Calls, messages, links, and payment requests</p>
            <h2>One routine for the moment something feels wrong.</h2>
          </div>

          {steps.map((step, index) => (
            <div key={step.title} aria-hidden={activeScene !== index} className={`sequence-scene sequence-scene--${index + 1}`}>
              <div className="sequence-scene__diagram">
                <div className="sequence-phone-ui">
                  <div className="sequence-phone-ui__top"><span>9:41</span><span>● ● ●</span></div>
                  <span className="sequence-phone-ui__label">{index === 0 ? "Incoming call" : index === 1 ? "Independent check" : "Trusted contact"}</span>
                  <div className="sequence-phone-ui__mark">{index === 0 ? "?" : index === 1 ? "✓" : "M"}</div>
                  <strong>{step.detail}</strong>
                  <small>{step.subdetail}</small>
                  <button type="button" tabIndex={-1}>{step.action}</button>
                </div>
              </div>
              <article className="sequence-scene__copy">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </div>
          ))}

          <div className="sequence-outro-scene" aria-hidden={activeScene !== 3}>
            <span>Pause. Verify. Tell someone.</span>
            <h2>You do not have to decide while someone is pressuring you.</h2>
          </div>
        </div>

        <div className="sequence-progress" aria-hidden="true"><span /></div>
        <p className="sequence-scroll-cue" aria-hidden="true">Scroll to walk through the routine</p>
      </div>

      <div className="sequence-mobile">
        <p className="sequence-mobile__intro">Calls, messages, links, and payment requests</p>
        <h2>One routine for the moment something feels wrong.</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <div><h3>{step.title}</h3><p>{step.body}</p></div>
            </li>
          ))}
        </ol>
      </div>

      <p className="sr-only" aria-live="polite">
        {activeScene >= 0 && activeScene < steps.length ? `${steps[activeScene].label}: ${steps[activeScene].title}` : "Safety routine overview"}
      </p>
    </section>
  );
}
