import { Metadata } from "next";
import Link from "next/link";
import AnimatedPageHero from "@/components/Site/AnimatedPageHero";
import WorkshopDeck from "@/components/Site/WorkshopDeck";

export const metadata: Metadata = {
  title: "Workshop",
  description: "See what happens during a Shield Our Elders scam-prevention workshop.",
};

const sessionSteps = [
  ["Before the workshop", "We ask the group what kinds of scams or suspicious messages people have been seeing recently. That helps us choose examples that are relevant to the people in the room."],
  ["During the workshop", "We go through suspicious calls, texts, links, and payment requests together. Participants look for warning signs and talk through what they would do next."],
  ["Follow-up", "When possible, we come back and practice the same steps again. We also go over anything that was confusing the first time."],
  ["What participants take home", "Everyone receives simple guides and reminders they can keep nearby for the next suspicious call or message."],
];

const topics = [
  "Bank and account scams",
  "Family emergency scams",
  "Remote-access scams",
  "Romance and investment scams",
  "Gift card, cryptocurrency, and wire-transfer requests",
  "Delivery, toll, Medicare, and tax messages",
];

export default function ProgramPage() {
  return (
    <main className="story-page story-page--program">
      <AnimatedPageHero
        variant="program"
        title="What happens in a workshop"
        intro="Our workshops use examples of suspicious calls, texts, websites, and payment requests that people may actually come across. Instead of just talking about scams, we work through them together and practice what to do next."
      />

      <section className="story-section program-timeline">
        <div className="story-wrap">
          <h2>How it works</h2>
          <ol>
            {sessionSteps.map(([title, body], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="story-section familiar-examples">
        <div className="story-wrap story-split">
          <div>
            <h2>We use examples people will recognize</h2>
            <p>A fake bank alert. A caller pretending to be a family member. A delivery text with a suspicious link. Someone asking to control your computer.</p>
          </div>
          <ol>
            {topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}
          </ol>
        </div>
      </section>

      <section className="story-section practice-round">
        <div className="story-wrap">
          <h2>How we work through an example</h2>
          <p>Use the arrows, swipe, or press the left and right arrow keys.</p>
          <WorkshopDeck />
        </div>
      </section>

      <section className="story-section session-access">
        <div className="story-wrap story-split">
          <div><h2>We try to make every session easy to follow</h2><p>We use large examples on screen, read important details aloud, explain unfamiliar words, and give people time to ask questions. Participants do not have to speak in front of the group or share personal experiences.</p></div>
          <ul>
            <li>Large-print handouts</li>
            <li>Clear, simple instructions</li>
            <li>Time for questions</li>
            <li>Seated activities</li>
            <li>No public sharing required</li>
          </ul>
        </div>
      </section>

      <section className="story-section take-home-section">
        <div className="story-wrap story-split">
          <div className="take-home-stack" aria-hidden="true">
            <span>Trusted-contact card</span>
            <span>Warning-sign checklist</span>
            <span>Large-print scam guide</span>
          </div>
          <div>
            <h2>What participants take home</h2>
            <p>Everyone leaves with materials they can keep somewhere easy to find. These may include a large-print scam guide, a warning-sign checklist, a trusted-contact card, space for important phone numbers, and space for a family verification phrase.</p>
            <p>The goal is to make the next suspicious call or message a little easier to handle.</p>
            <Link href="/resources" className="secondary-button">See the free resources</Link>
          </div>
        </div>
      </section>

      <section className="story-section program-cta">
        <div className="story-wrap story-split">
          <div><h2>Interested in bringing a workshop to your group?</h2><p>Tell us who the workshop is for and what kinds of scams people have been seeing. We can use that information to make the session more useful for your group.</p></div>
          <Link href="/contact" className="light-button">Request a workshop</Link>
        </div>
      </section>
    </main>
  );
}
