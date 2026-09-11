import { assetPath } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const audiences = [
  "Senior living communities",
  "Banks and credit unions",
  "Libraries and community groups",
  "Healthcare and caregiving teams",
];

const resources = [
  ["A suspicious call", "Five questions to ask before you do anything.", "/examples#calls"],
  ["A strange message", "How to check the sender, request, and link.", "/examples#messages"],
  ["Money already sent", "The first calls to make and records to save.", "/resources#recovery"],
];

const MinimalHome = () => (
  <main className="bg-[#f4f7fb] text-[#17345c]">
    <section className="relative overflow-hidden border-b-[3px] border-[#17345c] bg-[#f4f7fb] pt-[82px]">
      <div className="mx-auto grid min-h-[calc(88svh-82px)] max-w-[94rem] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-10">
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-display text-[clamp(3.7rem,6vw,7rem)] leading-[0.9]">Pause.<br />Verify.<br /><span className="doodle-highlight">Protect.</span></h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#51657f] sm:text-2xl sm:leading-9">Practical scam-safety workshops for older adults and the people who look out for them.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/program" className="doodle-button inline-flex min-h-14 items-center bg-[#3977f6] px-7 font-extrabold text-white">See the workshop</Link>
            <Link href="/contact" className="doodle-button inline-flex min-h-14 items-center bg-white px-7 font-extrabold text-[#17345c]">Bring us to your group</Link>
          </div>
        </div>
        <div className="relative min-h-[300px] sm:min-h-[520px] lg:min-h-[680px]">
          <Image src={assetPath("/images/doodles/simple-family-check.svg")} alt="An older woman checking a phone with her daughter" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-contain" />
        </div>
      </div>
    </section>

    <section className="border-b-[3px] border-[#17345c] bg-[#f3b83f] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[92rem] gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <h2 className="font-display text-3xl sm:text-4xl">Something feels wrong?</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {[["1", "Hang up or stop replying"], ["2", "Do not send money"], ["3", "Call someone you trust"]].map(([number, text]) => (
            <li key={number} className="flex min-h-16 items-center gap-4 border-l-[3px] border-[#17345c] pl-4 text-lg font-bold"><span className="font-display text-3xl">{number}</span>{text}</li>
          ))}
        </ol>
      </div>
    </section>

    <section className="overflow-hidden border-b-[3px] border-[#17345c] bg-[#3977f6] text-white">
      <div className="mx-auto max-w-[94rem] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="font-display text-[clamp(3rem,4.3vw,4.8rem)] leading-[0.98]">A workshop built around real decisions</h2>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-xl leading-8 text-white">We put a suspicious call or message on the screen. The group decides what to do, talks it through, and practices the safer next step.</p>
            <Link href="/program" className="doodle-button mt-8 inline-flex min-h-14 items-center bg-white px-7 font-bold text-[#17345c]">Walk through a session</Link>
          </div>
        </div>
        <div className="mt-12 grid border-y-2 border-white/60 sm:grid-cols-3">
          <p className="py-5 text-lg font-bold sm:border-r-2 sm:border-white/60 sm:px-5 sm:first:pl-0">45–60 minutes</p>
          <p className="border-t-2 border-white/60 py-5 text-lg font-bold sm:border-r-2 sm:border-t-0 sm:px-5">One return visit</p>
          <p className="border-t-2 border-white/60 py-5 text-lg font-bold sm:border-t-0 sm:px-5">Large-print take-home guides</p>
        </div>
        <div className="relative mx-auto min-h-[390px] max-w-6xl sm:min-h-[620px]">
          <Image src={assetPath("/images/doodles/simple-workshop.svg")} alt="Two older adults taking part in a small scam-safety workshop" fill sizes="(max-width: 1024px) 100vw, 80vw" className="object-contain object-bottom" />
        </div>
      </div>
    </section>

    <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <h2 className="font-display max-w-4xl text-[clamp(3rem,4.6vw,5.2rem)] leading-[0.98]">One routine that is easy to remember</h2>
        <div className="mt-12 grid border-y-[3px] border-[#17345c] lg:grid-cols-3">
          {[["Pause", "Give yourself time. Urgent does not mean real."], ["Verify", "Use a number or website you already trust."], ["Protect", "Bring in a trusted person before money moves."]].map(([title, text], index) => (
            <article key={title} className={`min-h-64 p-7 sm:p-9 ${index < 2 ? "border-b-[3px] border-[#17345c] lg:border-b-0 lg:border-r-[3px]" : ""}`}>
              <p className="font-display text-2xl text-[#3977f6]">0{index + 1}</p><h3 className="font-display mt-7 text-4xl">{title}</h3><p className="mt-4 text-xl leading-8 text-[#51657f]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
        <div className="relative min-h-[360px] lg:min-h-[530px]"><Image src={assetPath("/images/doodles/simple-partner-guide.svg")} alt="Two people sharing a printed safety guide" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" /></div>
        <div>
          <h2 className="font-display text-[clamp(3rem,4.3vw,4.8rem)] leading-[0.98]">We come to places people already know</h2>
          <ul className="mt-10 border-b-2 border-[#17345c]">{audiences.map((audience, index) => <li key={audience} className="flex items-center gap-5 border-t-2 border-[#17345c] py-5 text-lg font-bold sm:text-xl"><span className="text-sm text-[#3977f6]">0{index + 1}</span>{audience}</li>)}</ul>
          <Link href="/partners" className="mt-8 inline-flex border-b-2 border-[#17345c] pb-1 text-lg font-bold">Ways to partner</Link>
        </div>
      </div>
    </section>

    <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"><h2 className="font-display text-[clamp(3rem,4.2vw,4.8rem)] leading-none">Help for the moment you need it</h2><p className="max-w-2xl text-xl leading-8 text-[#dce9f7]">Plain-language guides for calls, messages, payment requests, and recovery. No account required.</p></div>
        <div className="mt-12 divide-y-2 divide-white/50 border-y-2 border-white/50">
          {resources.map(([title, text, href]) => <Link key={title} href={href} className="grid min-h-28 gap-3 py-6 text-white sm:grid-cols-[0.7fr_1fr_auto] sm:items-center sm:gap-8"><strong className="font-display text-2xl">{title}</strong><span className="text-lg text-[#dce9f7]">{text}</span><span className="font-bold text-[#f3b83f]">Open guide →</span></Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f47b6a] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-5xl text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.96]">Bring scam-safety practice to your community</h2><Link href="/contact" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-8 font-bold text-[#17345c]">Start a conversation</Link></div>
    </section>
  </main>
);

export default MinimalHome;
