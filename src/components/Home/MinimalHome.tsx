import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";
import HomeHero from "./HomeHero";
import SafetySequence from "./SafetySequence";

const audiences = [
  "Older adults",
  "Families and caregivers",
  "Senior communities",
  "Libraries",
  "Banks and credit unions",
  "Care teams",
];

const services = [
  {
    title: "Community workshops",
    body: "A 45–60 minute session built around the calls, texts, and payment requests people are seeing now.",
    href: "/program",
    link: "See how a session works",
  },
  {
    title: "Help in the moment",
    body: "Short, plain-language guides for checking a caller, reading a strange message, or acting after money was sent.",
    href: "/resources",
    link: "Open the free guides",
  },
  {
    title: "A safer second opinion",
    body: "The Shield Our Elders app helps people slow down, notice pressure, and choose an independent way to verify.",
    href: "/support",
    link: "Learn about the app",
  },
];

const resources = [
  ["Suspicious call checklist", "Five questions to ask before doing anything.", "/guides/suspicious-call-checklist.pdf"],
  ["Strange message checklist", "Check the sender, request, link, and pressure.", "/guides/suspicious-message-checklist.pdf"],
  ["After a scam", "The first calls to make and the records to save.", "/guides/after-a-scam-recovery-guide.pdf"],
];

export default function MinimalHome() {
  return (
    <main className="home-page">
      <HomeHero />

      <section className="audience-marquee" aria-label="People and organizations we serve">
        <div className="audience-marquee__track">
          {[...audiences, ...audiences].map((audience, index) => <span key={`${audience}-${index}`}>{audience}</span>)}
        </div>
      </section>

      <section className="home-services">
        <div className="section-heading">
          <h2>Scam prevention works better when people can practice it.</h2>
          <p>We turn familiar warnings into decisions people can rehearse, remember, and use under pressure.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span className="service-list__index">0{index + 1}</span>
              <div><h3>{service.title}</h3><p>{service.body}</p></div>
              <Link href={service.href}>{service.link}</Link>
            </article>
          ))}
        </div>
      </section>

      <SafetySequence />

      <section id="app" className="app-showcase">
        <div className="app-showcase__copy">
          <h2>The app is there when a workshop is not.</h2>
          <p>Paste a message, check a link, review a caller, or scan a QR code. The result explains the warning signs and gives a safer next step without pretending any automated check is perfect.</p>
          <Link href="/support" className="secondary-button">See app support</Link>
        </div>
        <div className="app-showcase__visual">
          <div className="app-device">
            <Image src={assetPath("/images/app-home.png")} alt="Shield Our Elders app home screen with checks for messages, calls, links, numbers, and payments" width={1080} height={2400} sizes="(max-width: 800px) 72vw, 360px" />
          </div>
          <span className="app-note app-note--one">Six focused checks</span>
          <span className="app-note app-note--two">Large controls and plain language</span>
        </div>
      </section>

      <section id="workshop" className="workshop-proof">
        <div className="workshop-proof__image">
          <Image src={assetPath("/images/photos/presenters-closing.jpg")} alt="Shield Our Elders presenters leading the closing portion of a community workshop" fill sizes="(max-width: 900px) 100vw, 58vw" className="object-cover" />
        </div>
        <div className="workshop-proof__copy">
          <h2>Built in the room, with real questions.</h2>
          <p>Participants can stop us, ask for an example again, write down a trusted number, or bring a family member. Every session ends with a simple plan people can take home.</p>
          <dl>
            <div><dt>Session</dt><dd>45–60 minutes</dd></div>
            <div><dt>Format</dt><dd>Small-group practice</dd></div>
            <div><dt>Take-home</dt><dd>Large-print guides</dd></div>
          </dl>
          <Link href="/contact" className="primary-button">Request a community session</Link>
        </div>
      </section>

      <section id="guides" className="home-resources">
        <div className="section-heading section-heading--compact">
          <h2>Keep the next step close by.</h2>
          <p>Download a guide now, before a stressful call arrives.</p>
        </div>
        <div className="home-resource-list">
          {resources.map(([title, detail, href]) => (
            <a key={title} href={assetPath(href)} download>
              <span className="home-resource-list__type">PDF</span>
              <span><strong>{title}</strong><small>{detail}</small></span>
              <span className="home-resource-list__download">Download</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-final">
        <div>
          <h2>Bring practical scam-safety training to your community.</h2>
          <p>Tell us who you serve and what people have been seeing. A short note is enough to begin.</p>
        </div>
        <Link href="/contact" className="light-button">Talk with our team</Link>
      </section>
    </main>
  );
}
