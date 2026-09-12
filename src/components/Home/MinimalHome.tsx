import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";
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
      <section className="home-hero">
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
