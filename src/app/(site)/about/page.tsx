import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import { assetPath } from "@/utils/assets";

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
    <main className="bg-[#f4f7fb] text-[#17345c]">
      <PageHero title="We started close to home" intro="Scam warnings were everywhere. A place to practice what to do was harder to find." image="/images/doodles/simple-family-check.svg" imageAlt="An older woman reviewing a phone with her daughter" imagePosition="center bottom" />

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <h2 className="font-display text-[clamp(3rem,5vw,5.4rem)] leading-[1.01]">A warning is easy to forget when the phone is ringing</h2>
          <div className="space-y-7 text-xl leading-8 text-[#51657f]"><p>Most people know they should watch for scams. That does not make it easy to think clearly when a caller says a loved one is in trouble or an account is about to close.</p><p>We teach one response: pause, verify, and tell someone. Then we practice it with situations people may actually receive.</p><Link href="/program" className="doodle-button mt-3 inline-flex bg-[#3977f6] px-7 py-4 font-extrabold text-white">Inside the workshop</Link></div>
        </div>
      </section>

      <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-3xl text-5xl leading-tight sm:text-6xl">How we teach</h2><div className="mt-12 grid gap-7 md:grid-cols-3">{principles.map(([title, text], index) => <article key={title} className={`doodle-card min-h-72 p-7 ${index === 0 ? "bg-white" : index === 1 ? "bg-[#f3b83f]" : "bg-[#f47b6a]"}`}><span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#17345c] bg-white font-extrabold">{index + 1}</span><h3 className="font-display mt-8 text-4xl">{title}</h3><p className="mt-4 text-lg leading-7 text-[#2b4669]">{text}</p></article>)}</div></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative min-h-[380px] sm:min-h-[520px]"><Image src={assetPath("/images/doodles/simple-workshop.svg")} alt="A small community workshop with older adults" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" /></div>
          <div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Made for the room, not a slide deck</h2><p className="mt-7 text-xl leading-8 text-[#51657f]">Participants can ask questions, repeat a step, write things down, or bring a trusted person. We leave room for conversation because that is often where the useful learning happens.</p></div>
        </div>
      </section>

      <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-4xl text-5xl leading-tight sm:text-6xl">Who the program is for</h2><div className="mt-12 grid gap-x-12 lg:grid-cols-2">{["Older adults living independently", "Residents in senior communities", "Family members and caregivers", "Staff who answer scam questions", "Community and faith groups", "Financial and public-service teams"].map((item, index) => <p key={item} className="border-t border-white/50 py-5 text-xl"><span className="mr-5 text-[#f3b83f]">0{index + 1}</span>{item}</p>)}</div></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem] border-l-[10px] border-[#3977f6] pl-7 sm:pl-12"><h2 className="font-display text-5xl leading-tight sm:text-7xl">Based in Brevard County</h2><p className="mt-7 max-w-4xl text-xl leading-8 text-[#51657f]">Local groups tell us which scams are showing up. That helps us choose examples that are timely without turning the workshop into a stream of alarming news.</p><Link href="/partners" className="doodle-button mt-9 inline-flex bg-white px-7 py-4 font-extrabold text-[#17345c]">Work with us</Link></div>
      </section>

      <section className="bg-[#b7a7e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="font-display text-4xl sm:text-6xl">Useful beats impressive</h2><p className="mt-5 max-w-3xl text-xl leading-8">We keep the language plain, the print large, and the next step clear.</p></div><Link href="/accessibility" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Our accessibility approach</Link></div>
      </section>
    </main>
  );
}
