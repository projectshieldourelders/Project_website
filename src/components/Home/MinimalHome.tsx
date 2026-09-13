import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";
import HomeHero from "./HomeHero";
import SafetySequence from "./SafetySequence";

const downloads = [
  ["Unexpected phone call", "What to do when someone calls asking for money or personal information.", "/guides/suspicious-call-checklist.pdf", "Download the checklist"],
  ["Suspicious text or email", "What to check before clicking a link, replying, or opening an attachment.", "/guides/suspicious-message-checklist.pdf", "Download the checklist"],
  ["Already sent money or information", "Steps you can take quickly if you think you may have responded to a scam.", "/guides/after-a-scam-recovery-guide.pdf", "Download the recovery guide"],
];

export default function MinimalHome() {
  return (
    <main className="home-page home-redesign">
      <HomeHero />

      <section className="home-statement">
        <h2>Free scam-prevention workshops for our community</h2>
        <div>
          <p>Scammers are constantly changing the way they reach people. Our workshops use real examples of phone calls, text messages, emails, payment requests, and other common scams so participants can see what they look like before encountering one themselves.</p>
          <p>We also practice what to do next: ending the conversation, checking whether a request is legitimate, contacting the real organization, and asking someone you trust for a second opinion.</p>
          <Link href="/program">Learn about the workshop</Link>
        </div>
      </section>

      <SafetySequence />

      <section id="app" className="app-showcase app-showcase--reframed">
        <div className="app-showcase__copy">
          <h2>Check a suspicious message, link, QR code, or phone number</h2>
          <p>Our scam-checking tool can help you look for common warning signs in something you received. You can use it to review messages, links, phone numbers, and QR codes.</p>
          <p className="app-showcase__note">The tool can help you decide what to check next, but it cannot guarantee that something is safe. If the request involves money, financial accounts, passwords, Social Security information, or other sensitive information, contact the organization directly using information from its official website, statement, or card.</p>
          <Link href="/support" className="secondary-button">See how the tool works</Link>
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
          <h2>Quick guides for common situations</h2>
          <p>Sometimes you just need to know what to do next. Our printable guides are short, easy to keep nearby, and organized around situations people actually encounter.</p>
        </div>
        <nav aria-label="Quick printable guides">
          {downloads.map(([title, detail, href, action]) => (
            <a key={title} href={assetPath(href)} download>
              <span><strong>{title}</strong><small>{detail}</small><em>{action}</em></span>
              <i aria-hidden="true">PDF</i>
            </a>
          ))}
        </nav>
      </section>

      <section className="home-invite">
        <div>
          <h2>Host a Shield Our Elders workshop</h2>
          <p>We work with senior communities, libraries, community groups, families, and other local organizations in Brevard County.</p>
          <p>Sessions can be adjusted around the scams your group is most concerned about, and participants are welcome to bring examples or questions they have received themselves.</p>
        </div>
        <Link href="/contact" className="light-button">Ask about hosting a workshop</Link>
      </section>
    </main>
  );
}
