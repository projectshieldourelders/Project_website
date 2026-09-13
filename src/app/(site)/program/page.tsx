import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WorkshopDeck from "@/components/Site/WorkshopDeck";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "Workshop",
  description: "See the agenda, practice exercise, accessibility choices, and take-home materials in a Shield Our Elders workshop.",
};

export default function ProgramPage() {
  return (
    <main className="story-page workshop-page">
      <section className="workshop-hero">
        <div className="workshop-hero__copy">
          <h1>Scam-Prevention Workshops</h1>
          <p>Shield Our Elders offers interactive scam-prevention workshops for older adults and community groups in Brevard County. Sessions usually last 45–60 minutes and cover common scams, warning signs, ways to verify suspicious requests, and what to do if someone is asking for money or personal information.</p>
          <Link href="/contact" className="primary-button">Request a workshop</Link>
        </div>
        <div className="workshop-hero__schedule" aria-label="Workshop schedule">
          <div><time>0:00</time><span>What scams are people seeing?</span></div>
          <div><time>0:10</time><span>How scammers create pressure</span></div>
          <div><time>0:25</time><span>How to verify a request</span></div>
          <div><time>0:45</time><span>What to do next</span></div>
        </div>
      </section>

      <section className="workshop-photo story-section">
        <figure>
          <div><Image src={assetPath("/images/photos/presenters-closing.jpg")} alt="Two Shield Our Elders presenters leading the closing discussion of a workshop" fill sizes="(max-width: 900px) 100vw, 68vw" /></div>
          <figcaption>A closing review from a recent community session in Brevard County.</figcaption>
        </figure>
        <aside>
          <strong>Workshops are adapted for each group</strong>
          <p>Before a session, we ask the host what their group has been seeing or asking about. One group may have questions about fake bank calls. Another may be concerned about text messages, Medicare scams, online shopping, artificial intelligence, or someone pretending to be a family member.</p>
          <p>We use that information to choose examples that are useful for the people attending.</p>
        </aside>
      </section>

      <section className="workshop-practice story-section">
        <div className="workshop-practice__heading">
          <h2>Try an example</h2>
          <p>Here is the type of situation we might discuss during a workshop. Use the controls or the left and right arrow keys to work through it step by step.</p>
        </div>
        <WorkshopDeck />
      </section>

      <section className="workshop-format story-section">
        <header><h2>Designed to be easy to follow</h2><p>We want participants to focus on the information without worrying about keeping up with a complicated presentation.</p></header>
        <div>
          <p><strong>Clear, readable examples.</strong> Messages and websites are enlarged on screen, important information is read aloud, and unfamiliar terms are explained.</p>
          <p><strong>No one has to participate.</strong> Participants may join the discussion, but they do not have to speak in front of the group or share personal experiences.</p>
          <p><strong>No technology required.</strong> Participants do not need a smartphone, laptop, or app to take part.</p>
          <p><strong>Materials to take home.</strong> Participants receive printed warning signs, verification steps, and space for important phone numbers and trusted contacts.</p>
        </div>
      </section>

      <section className="workshop-takeaway story-section">
        <div className="workshop-takeaway__papers" aria-hidden="true"><span>Warning signs</span><span>Official contacts</span><span>Second opinions</span></div>
        <div><h2>What participants learn</h2><p>Participants learn how to recognize common warning signs, slow down when someone creates urgency, protect verification codes and sensitive information, find an organization’s real contact details, verify a request independently, and ask someone else for a second opinion.</p><p>The goal is not to memorize every type of scam. Scam tactics change too quickly for that. We focus on habits that work across many situations.</p><Link href="/resources" className="secondary-button">View printable resources</Link></div>
      </section>

      <section className="workshop-book">
        <h2>Interested in hosting a workshop?</h2>
        <Link href="/contact" className="light-button">Request a workshop</Link>
      </section>
    </main>
  );
}
