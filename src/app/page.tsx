import Image from "next/image";
import Link from "next/link";

const checks = [
  {
    title: "Message check",
    text: "Paste a text or email. The app explains what feels off in plain language.",
  },
  {
    title: "Call check",
    text: "Answer a few yes-or-no questions after a suspicious call.",
  },
  {
    title: "Link and QR check",
    text: "Preview risky links before opening anything.",
  },
  {
    title: "Payment safety",
    text: "Pause before gift cards, crypto, wires, Zelle, Cash App, or Venmo.",
  },
];

const lessons = [
  "Bank scams",
  "Fake delivery texts",
  "Grandparent scams",
  "Voice clone warnings",
  "Recovery scams",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <Link className="brand" href="/">
          <Image src="/images/app/icon.png" alt="" width={44} height={44} priority />
          <span>Shield Our Elders</span>
        </Link>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#program">Program</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true">
          <Image
            src="/images/hero/banner-bg-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Scam safety for older adults</p>
            <h1>Stop the pressure before it becomes a payment.</h1>
            <p className="hero-lede">
              Shield Our Elders helps people check suspicious calls, texts, links,
              QR codes, and payment requests before they respond.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#how">
                See how it works
              </a>
              <a className="button secondary" href="mailto:projectshieldourelders@gmail.com">
                Bring it to a site
              </a>
            </div>
          </div>

          <div className="phone-stage" aria-label="Shield Our Elders app preview">
            <div className="alert-card alert-top">
              <span>Urgent call</span>
              <strong>Asked for a bank code</strong>
            </div>
            <div className="phone-frame">
              <Image
                src="/images/app/app-home.png"
                alt="Shield Our Elders app home screen"
                width={1080}
                height={2400}
                priority
              />
            </div>
            <div className="alert-card alert-bottom">
              <span>Safer next step</span>
              <strong>Call a trusted person</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Core safety promise">
        <span>Large buttons</span>
        <span>Plain language</span>
        <span>No shame</span>
        <span>Trusted contact first</span>
      </section>

      <section className="section intro" id="how">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>One calm routine for a stressful moment.</h2>
        </div>
        <div className="steps">
          <article>
            <span>01</span>
            <h3>Stop</h3>
            <p>Hang up. Do not click. Do not send money while someone is rushing you.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Check</h3>
            <p>Use the app to review the message, call, link, QR code, or payment request.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Ask</h3>
            <p>Contact a trusted person or the official company number before acting.</p>
          </article>
        </div>
      </section>

      <section className="split-section" id="features">
        <div className="feature-copy">
          <p className="eyebrow">Built around real scams</p>
          <h2>Checks that match what seniors actually receive.</h2>
          <p>
            The app avoids a crowded dashboard. It focuses on the moments that
            usually lead to harm: urgent calls, strange links, family emergency
            stories, and payment pressure.
          </p>
        </div>
        <div className="feature-list">
          {checks.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photo-break">
        <Image
          src="/images/event/event-2.jpg"
          alt="Community workshop"
          fill
          sizes="100vw"
        />
        <div>
          <p className="eyebrow">For real rooms</p>
          <h2>Senior centers, libraries, families, and caregivers.</h2>
          <p>Short lessons. Real examples. A plan people can remember.</p>
        </div>
      </section>

      <section className="section program" id="program">
        <div className="program-copy">
          <p className="eyebrow">Education that sticks</p>
          <h2>Practice builds confidence before the next scam arrives.</h2>
          <p>
            Shield Our Elders pairs the app with short lessons, realistic examples,
            and recovery steps for people who already clicked, paid, or shared
            information.
          </p>
          <div className="lesson-tags" aria-label="Lesson topics">
            {lessons.map((lesson) => (
              <span key={lesson}>{lesson}</span>
            ))}
          </div>
        </div>
        <div className="score-card">
          <span>Practice confidence</span>
          <strong>72% to 95%</strong>
          <p>Progress is shown simply so users can see themselves improving.</p>
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Bring Shield Our Elders to your community</p>
          <h2>Start with one workshop. Leave people with one safer habit.</h2>
        </div>
        <a className="button primary" href="mailto:projectshieldourelders@gmail.com">
          Email the team
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>Shield Our Elders</strong>
          <p>Student-led elder scam defense built for calm, simple decisions.</p>
        </div>
        <nav aria-label="Legal links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:projectshieldourelders@gmail.com">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
