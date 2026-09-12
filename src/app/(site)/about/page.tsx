import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Why Shield Our Elders teaches practical scam-safety skills in Brevard County.",
};

const principles = [
  ["No blame", "Being targeted does not mean someone was careless. Scammers are trained to create pressure."],
  ["Practice first", "We spend more time making decisions than listening to a lecture."],
  ["Bring someone in", "A family member, neighbor, caregiver, or staff member can help check the story."],
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f0] text-[#111815]">
      <PageHero title="We started close to home" intro="Scam warnings were everywhere. A place to practice what to do was harder to find." />

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <h2 className="font-display text-[clamp(3rem,5vw,5.4rem)] leading-[1.01]">A warning is easy to forget when the phone is ringing</h2>
          <div className="space-y-7 text-xl leading-8 text-[#5f6862]"><p>Most people know they should watch for scams. That does not make it easy to think clearly when a caller says a loved one is in trouble or an account is about to close.</p><p>We teach one response: pause, verify, and tell someone. Then we practice it with situations people may actually receive.</p><Link href="/program" className="doodle-button mt-3 inline-flex bg-[#176d5b] px-7 py-4 font-extrabold text-white">Inside the workshop</Link></div>
        </div>
      </section>

      <section className="border-b border-[#111815] bg-[#e6eee8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-3xl text-5xl leading-tight sm:text-6xl">How we teach</h2><div className="mt-12 grid gap-7 md:grid-cols-3">{principles.map(([title, text], index) => <article key={title} className={`doodle-card min-h-72 p-7 ${index === 0 ? "bg-white" : index === 1 ? "bg-[#dfe9df]" : "bg-[#dfe9df]"}`}><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#111815] bg-white font-extrabold">{index + 1}</span><h3 className="font-display mt-8 text-4xl">{title}</h3><p className="mt-4 text-lg leading-7 text-[#44504a]">{text}</p></article>)}</div></div>
      </section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="about-practice-panel" aria-label="Example workshop discussion">
            <div><span>Workshop example</span><span>On screen</span></div>
            <blockquote>“I need the six-digit code we just sent so I can secure your account.”</blockquote>
            <p>What is the caller asking for? How could we check the story without using their number?</p>
          </div>
          <div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Made for the room, not a slide deck</h2><p className="mt-7 text-xl leading-8 text-[#5f6862]">Participants can ask questions, repeat a step, write things down, or bring a trusted person. We leave room for conversation because that is often where the useful learning happens.</p></div>
        </div>
      </section>

      <section className="border-b border-[#111815] bg-[#111815] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-4xl text-5xl leading-tight sm:text-6xl">Who the program is for</h2><div className="mt-12 grid gap-x-12 lg:grid-cols-2">{["Older adults living independently", "Residents in senior communities", "Family members and caregivers", "Staff who answer scam questions", "Community and faith groups", "Financial and public-service teams"].map((item, index) => <p key={item} className="border-t border-white/50 py-5 text-xl"><span className="mr-5 text-[#dfe9df]">0{index + 1}</span>{item}</p>)}</div></div>
      </section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem] border-l-[10px] border-[#176d5b] pl-7 sm:pl-12"><h2 className="font-display text-5xl leading-tight sm:text-7xl">Based in Brevard County</h2><p className="mt-7 max-w-4xl text-xl leading-8 text-[#5f6862]">Local groups tell us which scams are showing up. That helps us choose examples that are timely without turning the workshop into a stream of alarming news.</p><Link href="/partners" className="doodle-button mt-9 inline-flex bg-white px-7 py-4 font-extrabold text-[#111815]">Work with us</Link></div>
      </section>

      <section className="bg-[#e6eee8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="font-display text-4xl sm:text-6xl">Everyone should be able to follow the room</h2><p className="mt-5 max-w-3xl text-xl leading-8">We use large examples, plain words, time for questions, and take-home guides designed to be read again later.</p></div><Link href="/accessibility" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Read our accessibility approach</Link></div>
      </section>
    </main>
  );
}
