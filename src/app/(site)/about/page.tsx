import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "About",
  description: "Why Shield Our Elders teaches scam-prevention through practice and conversation.",
};

export default function AboutPage() {
  return (
    <main className="story-page profile-page">
      <section className="about-photo-hero">
        <div className="about-photo-hero__title">
          <h1>It began with a gap between hearing a warning and using it.</h1>
          <p>Shield Our Elders is a Brevard County project built around what people can do during the call—not what they should have known afterward.</p>
        </div>
        <div className="about-photo-hero__photo">
          <Image src={assetPath("/images/photos/workshop-verification.jpg")} alt="Shield Our Elders presenters and participants discussing verification codes at a community workshop" fill priority sizes="100vw" />
          <span className="photo-note photo-note--screen">The code example everyone worked through together</span>
          <span className="photo-note photo-note--room">Questions stayed open throughout the session</span>
        </div>
      </section>

      <section className="about-origin story-section">
        <blockquote>“I know scams are out there. I just do not always recognize one while it is happening.”</blockquote>
        <div>
          <h2>That is the problem we teach for.</h2>
          <p>Pressure changes how a person makes decisions. A caller may create a deadline, claim a relative is in danger, or ask for secrecy before requesting money or a code. A list of scam types does not prepare someone for that feeling by itself.</p>
          <p>We put realistic examples on screen, stop at the difficult moment, and let the room work out a safer response together. Repeating the decision makes it easier to remember later.</p>
        </div>
      </section>

      <section className="about-principles story-section">
        <h2>What the room feels like</h2>
        <div className="about-principles__tape">
          <article><h3>No one is put on the spot.</h3><p>People may listen, take notes, ask privately, or bring someone with them. A person never has to describe a loss to take part.</p></article>
          <article><h3>The examples are recognizable.</h3><p>We use bank alerts, family emergencies, delivery texts, remote-access requests, and other situations the group has actually been hearing about.</p></article>
          <article><h3>Questions change the lesson.</h3><p>If the room is unsure about caller ID, QR codes, or gift-card payments, we stay with that subject rather than rushing through a deck.</p></article>
        </div>
      </section>

      <section className="about-local story-section">
        <div className="about-local__map" aria-hidden="true"><span>Brevard County</span><i /><i /><i /><i /></div>
        <div>
          <h2>Local examples keep the work honest.</h2>
          <p>We listen to older adults, families, caregivers, community staff, and financial-service teams in Brevard County. Their questions show us where instructions are too vague and which new tactics belong in the next session.</p>
          <Link href="/partners" className="text-link">Work with the project</Link>
        </div>
      </section>

      <section className="about-team story-section">
        <div><h2>The people behind the work</h2><p>This is a small, community-led project. Roles stay practical because the same people who prepare the examples also hear the questions in the room.</p></div>
        <dl>
          <div><dt>Project lead</dt><dd>Plans sessions and turns current scam tactics into teachable examples.</dd></div>
          <div><dt>Workshop volunteers</dt><dd>Facilitate practice, answer questions, and prepare large-print material.</dd></div>
          <div><dt>Community advisors</dt><dd>Tell us what people are encountering and where an explanation needs work.</dd></div>
        </dl>
      </section>

      <section className="about-close">
        <h2>A good workshop should leave people calmer, not more afraid.</h2>
        <Link href="/program" className="light-button">Read the workshop plan</Link>
      </section>
    </main>
  );
}
