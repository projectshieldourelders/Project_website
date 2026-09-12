import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = { title: "Scam Examples", description: "Practice spotting suspicious calls, messages, links, and payment requests." };

const signals = ["Unexpected contact", "Pressure to act now", "A request for money or a code", "Secrecy", "A link or number supplied by the sender"];

export default function ExamplesPage() {
  return (
    <main className="bg-[#f7f6f0] text-[#111815]">
      <PageHero title="Practice with the pause button on" intro="These examples are fictional, but the pressure tactics are common." />

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Look for pressure, not perfect spelling</h2><p className="mt-6 text-xl leading-8 text-[#5f6862]">A polished message can still be a scam. Start with what the sender wants you to do.</p></div><ul className="divide-y-2 divide-[#111815] border-y-2 border-[#111815]">{signals.map((signal, index) => <li key={signal} className="flex gap-5 py-5 text-xl font-bold"><span className="text-[#176d5b]">0{index + 1}</span>{signal}</li>)}</ul></div></section>

      <section id="calls" className="scroll-mt-28 border-b border-[#111815] bg-[#dfe9df] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-2 lg:gap-20"><div className="doodle-card bg-white p-7 sm:p-9"><p className="font-bold">Unknown caller</p><blockquote className="font-display mt-7 text-3xl leading-tight">“Your grandson has been arrested. Send bail money today and do not tell anyone.”</blockquote></div><div><h2 className="font-display text-5xl">What stands out</h2><ul className="mt-7 space-y-4 text-xl"><li>• A sudden family emergency</li><li>• Money requested immediately</li><li>• An instruction to keep it secret</li></ul><p className="mt-8 border-l-[5px] border-[#111815] pl-5 text-xl font-bold">Safer step: hang up and call the family member directly.</p></div></div></section>

      <section id="messages" className="scroll-mt-28 border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-2 lg:gap-20"><div><h2 className="font-display text-5xl">A package text</h2><p className="mt-6 text-xl leading-8 text-[#5f6862]">The message says a delivery cannot be completed until a small fee is paid through its link.</p><p className="mt-8 border-l-[5px] border-[#176d5b] pl-5 text-xl font-bold">Safer step: do not use the link. Open the carrier’s official app or type its known address yourself.</p></div><div className="doodle-card bg-[#e6eee8] p-7 sm:p-9"><p className="font-bold">New message</p><blockquote className="font-display mt-7 text-3xl leading-tight">“Your package is on hold. Confirm your address and pay 30¢ now.”</blockquote></div></div></section>

      <section className="border-b border-[#111815] bg-[#111815] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-5xl">A bank alert</h2><p className="mt-6 text-xl leading-8 text-[#e6eee8]">The sender knows the bank’s name and says an account will be locked.</p></div><div><blockquote className="border-l-[5px] border-[#dfe9df] pl-6 font-display text-3xl leading-tight">“Reply with the six-digit code we just sent so we can stop the transfer.”</blockquote><p className="mt-8 text-xl font-bold text-[#dfe9df]">Safer step: never read back a verification code. Call the number on the card.</p></div></div></section>

      <section className="border-b border-[#111815] bg-[#e6eee8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">A voice that sounds familiar</h2><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]"><p className="text-xl leading-8">A caller may sound like family and still be impersonating them. Voice cloning and ordinary acting can both create doubt.</p><div className="border-l-[5px] border-[#111815] pl-6"><p className="font-display text-3xl">Use the family phrase</p><p className="mt-4 text-xl leading-8">Ask for a private phrase chosen in advance, then call the person back on a number you already know.</p></div></div></div></section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">Before any unusual payment</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{["Gift card", "Cryptocurrency", "Wire transfer", "Cash by courier", "Payment app", "Gold or precious metals"].map((method) => <div key={method} className="border border-[#111815] bg-white p-6 text-2xl font-bold">{method}</div>)}</div><p className="mt-9 max-w-4xl text-xl leading-8 text-[#5f6862]">Stop when someone insists on an unusual payment method or tells you how to lie about the reason for the payment.</p></div></section>

      <section className="bg-[#dfe9df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-4xl text-4xl leading-tight sm:text-6xl">Want to practice with a group?</h2><Link href="/program" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">See the workshop</Link></div></section>
    </main>
  );
}
