import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";
import HomeHero from "./HomeHero";
import SafetySequence from "./SafetySequence";

const downloads = [
  ["Unexpected call", "A five-step checklist to keep by the phone.", "/guides/suspicious-call-checklist.pdf"],
  ["Strange text or email", "What to inspect before opening a link.", "/guides/suspicious-message-checklist.pdf"],
  ["Money already sent", "Who to contact and what to save right away.", "/guides/after-a-scam-recovery-guide.pdf"],
];

export default function MinimalHome() {
  return (
    <main className="home-page home-redesign">
      <HomeHero />

      <section className="home-statement">
        <p>Scam advice is easy to forget during a stressful call.</p>
        <h2>We rehearse the moment, not just the warning signs.</h2>
        <div>
          <p>In a Shield Our Elders workshop, people look closely at a realistic request, decide what feels wrong, and practice checking it without the caller’s help.</p>
          <Link href="/program">See a workshop from start to finish</Link>
        </div>
      </section>

      <SafetySequence />

      <section id="app" className="app-showcase app-showcase--reframed">
        <div className="app-showcase__copy">
          <h2>One place to check the thing in front of you.</h2>
          <p>Paste a message, inspect a link, scan a QR code, or review a phone number. The app points to warning signs and gives you a safer way to verify the request.</p>
          <p className="app-showcase__note">The result is guidance, not a guarantee. For money, account access, or identity information, confirm the answer with the organization or a person you trust.</p>
          <Link href="/support" className="secondary-button">How the app works</Link>
        </div>
        <div className="app-showcase__visual">
          <div className="app-device">
            <Image src={assetPath("/images/app-home.png")} alt="Shield Our Elders app home screen" width={1080} height={2400} sizes="(max-width: 800px) 72vw, 360px" loading="eager" />
          </div>
          <div className="app-orbit" aria-hidden="true"><span>Message</span><span>Link</span><span>Number</span><span>QR code</span></div>
        </div>
      </section>

      <section id="guides" className="home-guide-strip">
        <div>
          <h2>Choose the situation, not a long article.</h2>
          <p>Each printable guide starts with the first call to make and fits on one page.</p>
        </div>
        <nav aria-label="Quick printable guides">
          {downloads.map(([title, detail, href]) => (
            <a key={title} href={assetPath(href)} download>
              <span><strong>{title}</strong><small>{detail}</small></span>
              <i aria-hidden="true">PDF</i>
            </a>
          ))}
        </nav>
      </section>

      <section className="home-invite">
        <p>For senior communities, libraries, families, banks, and care teams in Brevard County.</p>
        <h2>Bring one real scam question. We will build the practice around it.</h2>
        <Link href="/contact" className="light-button">Ask about a community session</Link>
      </section>
    </main>
  );
}
