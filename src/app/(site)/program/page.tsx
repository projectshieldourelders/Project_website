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
          <h1>A workshop is practice for one difficult minute.</h1>
          <p>We spend 45–60 minutes examining realistic calls, texts, websites, and payment requests so the first safe response is easier to recall under pressure.</p>
          <Link href="/contact" className="primary-button">Request a session</Link>
        </div>
        <div className="workshop-hero__schedule" aria-label="Workshop schedule">
          <div><time>0:00</time><span>Hear what the room is seeing</span></div>
          <div><time>0:10</time><span>Find the pressure tactic</span></div>
          <div><time>0:25</time><span>Practice an independent check</span></div>
          <div><time>0:45</time><span>Build a personal response plan</span></div>
        </div>
      </section>

      <section className="workshop-photo story-section">
        <figure>
          <div><Image src={assetPath("/images/photos/presenters-closing.jpg")} alt="Two Shield Our Elders presenters leading the closing discussion of a workshop" fill sizes="(max-width: 900px) 100vw, 68vw" /></div>
          <figcaption>A closing review from a recent community session in Brevard County.</figcaption>
        </figure>
        <aside>
          <strong>What changes for each group</strong>
          <p>Before the date, the host tells us which questions have been coming up. We choose examples that match the room instead of delivering the same presentation everywhere.</p>
        </aside>
      </section>

      <section className="workshop-practice story-section">
        <div className="workshop-practice__heading">
          <h2>Work through a sample call</h2>
          <p>Use the controls or the left and right arrow keys. This is the kind of discussion we hold in the room.</p>
        </div>
        <WorkshopDeck />
      </section>

      <section className="workshop-format story-section">
        <header><h2>Designed around the people attending</h2><p>Accessibility is part of the session plan, not an extra handout at the end.</p></header>
        <div>
          <p><strong>We make the details visible.</strong> Examples are enlarged on screen, important lines are read aloud, and unfamiliar terms are explained before the discussion moves on.</p>
          <p><strong>Participation stays optional.</strong> Activities are seated. No one has to speak to the group, share a personal experience, or use an app to follow the lesson.</p>
          <p><strong>The material goes home.</strong> Participants receive a large-print checklist, a trusted-contact card, and space to record official phone numbers they use.</p>
        </div>
      </section>

      <section className="workshop-takeaway story-section">
        <div className="workshop-takeaway__papers" aria-hidden="true"><span>Trusted contacts</span><span>Official numbers</span><span>Warning signs</span></div>
        <div><h2>The lesson ends with a plan that belongs to the participant.</h2><p>A useful plan names who to call, where to find an official number, and what never to share. It works without remembering the name of every scam.</p><Link href="/resources" className="secondary-button">See the take-home guides</Link></div>
      </section>

      <section className="workshop-book">
        <h2>We will shape the examples before we arrive.</h2>
        <Link href="/contact" className="light-button">Plan a workshop</Link>
      </section>
    </main>
  );
}
