import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";
import HomeHero from "./HomeHero";
import SafetySequence from "./SafetySequence";

const services = [
  {
    title: "Community workshops",
    body: "A 45–60 minute session covering common scams, warning signs, and what to do when something does not feel right.",
    href: "/program",
    link: "See how a session works",
  },
  {
    title: "Help when you need it",
    body: "Simple guides for checking an unexpected caller, suspicious message, strange link, or payment request.",
    href: "/resources",
    link: "Open the free guides",
  },
  {
    title: "The Shield Our Elders app",
    body: "Our app gives people another way to check suspicious messages, links, phone numbers, QR codes, and payment requests. It points out possible warning signs and explains what you can do next.",
    href: "/support",
    link: "Learn about the app",
  },
];

const resources = [
  ["Suspicious Call Checklist", "Five things to check before responding to an unexpected caller.", "/guides/suspicious-call-checklist.pdf"],
  ["Suspicious Message Checklist", "Check the sender, the request, any links, and whether someone is trying to rush you.", "/guides/suspicious-message-checklist.pdf"],
  ["What to Do After a Scam", "Steps to take if you sent money or shared personal information.", "/guides/after-a-scam-recovery-guide.pdf"],
];

export default function MinimalHome() {
  return (
    <main className="home-page">
      <HomeHero />

      <section className="home-services">
        <div className="section-heading">
          <h2>Knowing about scams is one thing. Practicing what to do is another.</h2>
          <p>Our workshops use real examples of scam calls, texts, emails, and payment requests so people can practice how to respond before it happens to them.</p>
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
          <h2>The app can help when you are unsure.</h2>
          <p>You can use the Shield Our Elders app to check suspicious text messages, phone numbers, website links, QR codes, and unusual payment requests.</p>
          <ul className="app-check-list">
            <li>It explains what looks suspicious.</li>
            <li>It suggests ways to verify the situation yourself.</li>
            <li>It reminds you when another person should be involved.</li>
          </ul>
          <p className="app-showcase__note">No automated tool can guarantee whether something is a scam, so we always encourage people to double-check important decisions with a trusted person or organization.</p>
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
          <h2>Our workshops are built around real conversations.</h2>
          <p>People can ask questions throughout the session. If someone wants us to explain an example again, we will. Participants can write down an important phone number or bring a family member with them.</p>
          <p>The goal is for everyone to leave knowing what they can actually do the next time a suspicious call or message appears.</p>
          <dl>
            <div><dt>Session</dt><dd>45–60 minutes</dd></div>
            <div><dt>Format</dt><dd>Small-group discussion and practice</dd></div>
            <div><dt>Take-home</dt><dd>Large-print guides and checklists</dd></div>
          </dl>
          <Link href="/contact" className="primary-button">Request a community session</Link>
        </div>
      </section>

      <section id="guides" className="home-resources">
        <div className="section-heading section-heading--compact">
          <h2>Keep these guides somewhere easy to find.</h2>
          <p>It is much easier to know what to do when you already have the information in front of you.</p>
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
          <h2>Want to bring a workshop to your community?</h2>
          <p>We work with senior communities, libraries, families, local organizations, and other groups that serve older adults. Tell us a little about your group and what kinds of scams people have been seeing.</p>
        </div>
        <Link href="/contact" className="light-button">Contact our team</Link>
      </section>
    </main>
  );
}
