import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import WorkshopDeck from "@/components/Site/WorkshopDeck";

export const metadata: Metadata = { title: "Program", description: "See what happens during a Shield Our Elders scam-safety workshop." };

const steps = [
  ["Before we visit", "We ask which scams have been showing up in the community."],
  ["First session", "We work through suspicious calls, messages, links, and payment requests."],
  ["Return visit", "Participants try the routine again and revisit anything that felt unclear."],
  ["What stays", "Everyone keeps large-print guides and a trusted-contact card."],
];

const topics = ["Bank and account alerts", "Grandparent emergencies", "Remote-access requests", "Romance and investment scams", "Gift cards, crypto, and wires", "Delivery, toll, Medicare, and tax messages"];

export default function ProgramPage() {
  return (
    <main className="bg-[#f4f7fb] text-[#17345c]">
      <PageHero title="Inside the workshop" intro="A group session using the calls, texts, websites, and payment requests people see every day." image="/images/doodles/simple-workshop.svg" imageAlt="A small scam-safety workshop with two older adults" imagePosition="center bottom" />

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-5xl text-[clamp(3.1rem,5.7vw,6rem)] leading-[0.98]">We do the work together</h2><ol className="mt-16 grid gap-6 lg:grid-cols-2">{steps.map(([title, text], index) => <li key={title} className={`doodle-card min-h-72 p-7 sm:p-9 ${index === 0 ? "bg-[#3977f6] text-white" : index === 1 ? "bg-[#b7a7e8]" : index === 2 ? "bg-[#f47b6a]" : "bg-[#f3b83f]"}`}><div className="flex items-start justify-between gap-5"><h3 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h3><span className="font-display text-3xl">0{index + 1}</span></div><p className={`mt-8 max-w-2xl text-xl leading-8 ${index === 0 ? "text-white" : "text-[#2b4669]"}`}>{text}</p></li>)}</ol></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">The examples feel familiar</h2><p className="mt-6 max-w-lg text-xl leading-8 text-[#dce9f7]">A fake bank alert. A caller pretending to be family. A delivery text with the wrong link. We use examples people may recognize.</p></div><ul className="grid sm:grid-cols-2">{topics.map((topic, index) => <li key={topic} className="border-b border-[#7690ad] py-5 text-lg font-bold sm:odd:pr-6 sm:even:pl-6"><span className="mr-4 text-[#f3b83f]">{String(index + 1).padStart(2, "0")}</span>{topic}</li>)}</ul></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">A practice round takes four steps</h2><p className="mt-5 max-w-3xl text-xl leading-8 text-[#51657f]">Use the arrows, swipe, or press the left and right arrow keys.</p><WorkshopDeck /></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Built to be easier to follow</h2><p className="mt-7 text-xl leading-8 text-[#51657f]">We use large projected examples, read key details aloud, explain unfamiliar terms, and pause between activities.</p></div><ul className="divide-y-2 divide-[#17345c] border-y-2 border-[#17345c] text-xl font-bold">{["Large-print handouts", "Plain-language instructions", "Time for questions", "Seated activities", "No public sharing required"].map((item) => <li key={item} className="py-5">✓ <span className="ml-3">{item}</span></li>)}</ul></div>
      </section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20"><div className="doodle-card flex min-h-[360px] items-center justify-center bg-[#3977f6] p-10 text-white"><p className="font-display max-w-xl text-center text-5xl leading-tight sm:text-6xl">The session ends. The reminder stays.</p></div><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">What goes home</h2><p className="mt-7 text-xl leading-8 text-[#51657f]">Participants keep a large-print guide, a warning-sign checklist, a trusted-contact card, and space to write a family verification phrase.</p><Link href="/resources" className="doodle-button mt-9 inline-flex bg-[#f3b83f] px-7 py-4 font-extrabold text-[#17345c]">See free resources</Link></div></div>
      </section>

      <section className="bg-[#f47b6a] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="font-display text-4xl leading-tight sm:text-6xl">A useful hour for your group</h2><p className="mt-5 text-xl">Tell us who is attending and what they have been seeing.</p></div><Link href="/contact" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Request a workshop</Link></div></section>
    </main>
  );
}
