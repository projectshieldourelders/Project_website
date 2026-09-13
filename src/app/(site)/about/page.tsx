import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedPageHero from "@/components/Site/AnimatedPageHero";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "About",
  description: "Why Shield Our Elders teaches practical scam-prevention skills in Brevard County.",
};

const teachingPrinciples = [
  ["No judgment", "Anyone can be targeted by a scam. Scammers are good at creating fear, urgency, and confusion. Our goal is not to make anyone feel embarrassed. It is to help people feel more prepared."],
  ["We practice", "We do not want people sitting through an hour of slides. Participants look at example calls and messages, talk through what seems suspicious, and decide what they would do next."],
  ["Ask someone else", "One of the easiest ways to slow down a scam is to involve another person. That could be a family member, friend, neighbor, caregiver, bank employee, or staff member."],
];

const audiences = [
  "Older adults living on their own",
  "Senior living communities",
  "Family members and caregivers",
  "Staff who regularly help with suspicious calls or messages",
  "Community groups and faith organizations",
  "Banks, libraries, and organizations that serve older adults",
];

export default function AboutPage() {
  return (
    <main className="story-page story-page--about">
      <AnimatedPageHero
        variant="about"
        title="We started with a simple question"
        intro="People hear scam warnings all the time. But when a strange call or message actually shows up, knowing what to do can be much harder. That is why we started Shield Our Elders."
      />

      <section className="story-section about-routine">
        <div className="story-wrap story-split">
          <div>
            <h2>Knowing the warning signs is not always enough</h2>
            <p>Most people already know that scams exist. The hard part is recognizing one when someone is calling you, rushing you, asking for money, or claiming that someone you care about is in trouble.</p>
            <p>Our workshops focus on what to do in that moment. Then we practice using real examples so the steps are easier to remember when they matter.</p>
            <Link href="/program" className="text-link">See what happens in a workshop</Link>
          </div>
          <div className="routine-stamp" aria-label="Pause. Check. Tell someone.">
            <span>Pause.</span><span>Check.</span><span>Tell someone.</span>
          </div>
        </div>
      </section>

      <section className="story-section teaching-section">
        <div className="story-wrap">
          <h2>How we teach</h2>
          <div className="teaching-lines">
            {teachingPrinciples.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section example-conversation">
        <div className="story-wrap story-split">
          <div className="conversation-card">
            <span>Workshop example</span>
            <blockquote>“I need the six-digit code we just sent so I can secure your account.”</blockquote>
          </div>
          <div className="conversation-questions">
            <h2>We slow the moment down</h2>
            <p>What is this caller asking you to give them?</p>
            <p>Is there another way to contact the bank?</p>
            <p>Who could you ask before doing anything?</p>
            <small>The point is not just to identify the scam. It is to practice what you would actually do next.</small>
          </div>
        </div>
      </section>

      <section className="story-section workshop-conversation">
        <div className="story-wrap workshop-conversation__layout">
          <div className="workshop-conversation__image">
            <Image src={assetPath("/images/photos/workshop-verification.jpg")} alt="A Shield Our Elders workshop discussing verification codes" fill sizes="(max-width: 900px) 100vw, 52vw" />
          </div>
          <div>
            <h2>Our workshops are meant to feel like a conversation</h2>
            <p>People can stop us and ask questions. We can go through an example again. Participants can write down important phone numbers, take notes, or bring someone with them.</p>
            <p>Some of the best questions we hear are not ones we planned for, so we leave plenty of time for discussion.</p>
          </div>
        </div>
      </section>

      <section className="story-section audience-section">
        <div className="story-wrap story-split">
          <h2>Who we work with</h2>
          <div className="audience-list">
            {audiences.map((audience, index) => <p key={audience}><span>0{index + 1}</span>{audience}</p>)}
          </div>
        </div>
      </section>

      <section className="story-section team-section">
        <div className="story-wrap">
          <div className="section-intro"><h2>Our team</h2><p>Shield Our Elders is built by people who care about making scam prevention easier to understand and easier to use in real life.</p></div>
          <div className="team-roles">
            <article><strong>Project lead</strong><p>Plans workshops, develops examples, and keeps the program focused on practical decisions.</p></article>
            <article><strong>Workshop volunteers</strong><p>Help run practice activities, answer questions, and prepare take-home materials.</p></article>
            <article><strong>Community advisors</strong><p>Families, caregivers, and local organizations tell us what people are seeing and what needs clearer explanation.</p></article>
          </div>
        </div>
      </section>

      <section className="story-section local-section">
        <div className="story-wrap story-split">
          <div><h2>We are based in Brevard County</h2><p>Shield Our Elders started as a local project. We talk with people and organizations in our community about the scams they are seeing and use those examples to improve our workshops.</p><p>That keeps the program focused on situations people may actually run into instead of just talking about scams in general.</p></div>
          <Link href="/partners" className="primary-button">Work with us</Link>
        </div>
      </section>

      <section className="story-section access-note">
        <div className="story-wrap story-split">
          <div><h2>We want the workshop to be easy to follow</h2><p>We use large text, simple examples, clear language, and plenty of time for questions. Participants also receive guides they can take home and look at again later.</p></div>
          <Link href="/accessibility" className="secondary-button">Read about accessibility</Link>
        </div>
      </section>
    </main>
  );
}
