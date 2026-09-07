import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";

const urgentGuides = [
  { title: "Stop the conversation", summary: "Hang up, close the message, or step away. You are allowed to take your time.", detail: "Do not share a code, password, card number, or send money while someone is waiting. Real organizations will let you pause and check." },
  { title: "Check another way", summary: "Use a number you already trust—not the number or link they gave you.", detail: "Call the number on your bank card or statement. For a family emergency, call that person or another relative directly and use your family verification phrase." },
  { title: "Tell someone you trust", summary: "A second set of eyes can break the pressure and help you decide safely.", detail: "Contact your trusted person before paying, installing an app, buying gift cards, sending cryptocurrency, or allowing remote access to your device." },
];

const scamTopics = [
  "Bank & government impersonation",
  "Tech-support & remote access",
  "Gift cards & cryptocurrency",
  "Suspicious links & QR codes",
  "AI family emergency calls",
  "Texts, emails & phone pressure",
];

const materials = [
  ["Large-print guides", "Plain-language checklists for calls, messages, payments, and recovery."],
  ["Trusted-contact card", "A wallet-sized reminder of who to call before making a rushed decision."],
  ["Family verification phrase", "A simple plan families can use to check an urgent story—even when a voice sounds real."],
  ["Partner toolkit", "Reusable materials for caregivers, libraries, and community staff to keep the lessons going."],
];

const impact = [
  ["120–250", "older adults reached"],
  ["20–35%", "learning improvement goal"],
  ["300+", "app visits or QR scans"],
  ["4–5", "anchor senior sites"],
];

export default function MinimalHome() {
  return (
    <main className="site-shell shield-home text-[#183b36]">
      <section className="shield-hero site-mist pt-[82px]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.92fr] lg:items-center lg:px-10 lg:py-20">
          <div className="shield-reveal max-w-3xl">
            <p className="section-label">Student-led • Brevard County, Florida</p>
            <h1 className="font-display mt-4 text-[clamp(3.4rem,7vw,7.3rem)] leading-[.9] tracking-[-.04em]">Stop. Check. Stay protected.</h1>
            <p className="mt-7 max-w-[38rem] text-xl leading-8 text-[#4d635d] sm:text-2xl sm:leading-9">Practical scam-defense workshops and tools that help adults 60+ slow down pressure, verify the story, and act with confidence.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#help-now" className="action-button action-button--primary inline-flex min-h-14 items-center px-7 text-lg font-bold">I think this is a scam</Link>
              <Link href="/contact" className="action-button action-button--secondary inline-flex min-h-14 items-center px-7 text-lg font-bold">Bring us to your community</Link>
            </div>
            <p className="mt-6 text-base font-bold text-[#395a54]">Pause <span aria-hidden="true">•</span> Verify <span aria-hidden="true">•</span> Protect</p>
          </div>

          <figure className="shield-hero__photo shield-reveal shield-reveal--late relative min-h-[24rem] overflow-hidden rounded-[1.5rem] sm:min-h-[34rem]">
            <Image src={assetPath("/images/photos/presenters-closing.jpg")} alt="Student presenters leading a Shield Our Elders workshop" fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-center" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-[#fbfaf7]/95 p-4 text-sm font-bold leading-5 shadow-lg">A live Shield Session in Brevard County—real examples, open questions, and response practice.</figcaption>
          </figure>
        </div>
      </section>

      <section id="help-now" className="scroll-mt-24 bg-[#193832] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-sm font-bold uppercase tracking-[.12em] text-[#e9c96c]">If something feels wrong right now</p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <h2 className="font-display text-[clamp(2.8rem,5vw,5.3rem)] leading-[.95] tracking-[-.03em]">Do these three things.</h2>
            <p className="max-w-2xl text-lg leading-8 text-white/75">Urgency is a tactic. Nothing gets less legitimate because you took time to verify it.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {urgentGuides.map((item, index) => (
              <details key={item.title} className="shield-step group rounded-2xl border border-white/20 bg-white/[.06] p-6 open:bg-white/[.1]">
                <summary className="cursor-pointer list-none">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9c96c] text-xl font-bold text-[#193832]">{index + 1}</span>
                  <h3 className="font-display mt-6 text-3xl">{item.title}</h3>
                  <p className="mt-3 text-lg leading-7 text-white/75">{item.summary}</p>
                  <span className="mt-5 inline-block font-bold text-[#e9c96c] group-open:hidden">Read more +</span>
                </summary>
                <p className="mt-5 border-t border-white/20 pt-5 text-base leading-7 text-white/80">{item.detail}</p>
              </details>
            ))}
          </div>
          <p className="mt-7 text-sm leading-6 text-white/60">If money or personal information was already sent, contact your bank immediately and visit our <Link href="/resources#recovery" className="font-bold text-white underline underline-offset-4">recovery guide</Link>.</p>
        </div>
      </section>

      <section className="site-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="section-label">The Shield Session</p>
              <h2 className="font-display mt-3 text-[clamp(2.8rem,4.6vw,5rem)] leading-[.95] tracking-[-.03em]">Practice for the moment that matters.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#52645d]">Our repeated 45–60 minute workshops use realistic scenarios, group discussion, and simple response practice—not fear or technical jargon.</p>
              <Link href="/program" className="text-link mt-7">See how a session works</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {scamTopics.map((topic, index) => (
                <div key={topic} className="shield-topic flex min-h-28 items-center gap-4 rounded-2xl border border-[#c6d3cb] bg-[#f1f4ef] p-5">
                  <span className="font-display text-3xl text-[#bb715a]">0{index + 1}</span>
                  <p className="text-lg font-bold leading-6">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-mist px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-24">
          <div className="app-phone mx-auto w-full max-w-[23rem] rounded-[2.6rem] border-[10px] border-[#193832] bg-white p-2 shadow-[0_28px_70px_rgba(25,56,50,.18)]">
            <Image src={assetPath("/images/app-home.png")} alt="Shield Our Elders Android app prototype home screen" width={1080} height={2400} className="h-auto w-full rounded-[1.8rem]" />
          </div>
          <div>
            <p className="section-label">Support that goes home with you</p>
            <h2 className="font-display mt-3 text-[clamp(2.8rem,4.8vw,5.2rem)] leading-[.95] tracking-[-.03em]">Clear tools. One calm next step.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52645d]">The Android app prototype puts an “I THINK THIS IS A SCAM” emergency button, Scam Check tools, trusted contacts, recovery guidance, and short lessons in one easy-to-read place.</p>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {materials.map(([title, text]) => (
                <article key={title} className="border-t border-[#b7c8be] pt-4">
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 leading-6 text-[#52645d]">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/resources" className="action-button action-button--primary mt-8 inline-flex min-h-14 items-center px-7 text-lg font-bold">Get free resources</Link>
          </div>
        </div>
      </section>

      <section className="site-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="max-w-3xl">
            <p className="section-label">Measured for lasting impact</p>
            <h2 className="font-display mt-3 text-[clamp(2.8rem,4.8vw,5.2rem)] leading-[.95] tracking-[-.03em]">More than a one-time talk.</h2>
            <p className="mt-6 text-lg leading-8 text-[#52645d]">Baseline surveys, pre/post learning checks, follow-up retention checks, app engagement, and partner feedback show what people remember and what communities can sustain.</p>
          </div>
          <div className="mt-10 grid border-y border-[#c6d3cb] sm:grid-cols-2 lg:grid-cols-4">
            {impact.map(([number, label]) => (
              <div key={label} className="shield-stat border-b border-[#c6d3cb] py-7 sm:px-6 lg:border-b-0 lg:border-r last:lg:border-r-0">
                <strong className="font-display block text-5xl text-[#3f6d60] sm:text-6xl">{number}</strong>
                <span className="mt-2 block text-base font-bold text-[#52645d]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#bb715a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.12em] text-white/70">For senior communities, libraries, caregivers & families</p>
            <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,5.4rem)] leading-[.95] tracking-[-.03em]">Bring a Shield Session to your community.</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-14 w-fit items-center rounded-full bg-white px-8 text-lg font-bold text-[#193832] transition-transform hover:-translate-y-1">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
