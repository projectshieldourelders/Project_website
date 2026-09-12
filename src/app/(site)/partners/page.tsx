import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = { title: "Partners", description: "Host or support a scam-safety workshop in Brevard County." };

const partners = [
  ["Senior living", "Host a session for residents, families, or staff."],
  ["Banks and credit unions", "Help customers pause before a rushed transfer or account takeover."],
  ["Care teams", "Give staff and families a shared way to check an urgent request."],
  ["Libraries and community groups", "Offer the workshop in a familiar, easy-to-reach place."],
];

export default function PartnersPage() {
  return (
    <main className="bg-[#f7f6f0] text-[#111815]">
      <PageHero title="Bring us to your community" intro="We work with organizations that already know and serve older adults." />

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"><h2 className="font-display text-5xl leading-tight sm:text-6xl">A partnership can start small</h2><div><p className="max-w-2xl text-xl leading-8 text-[#5f6862]">You do not need a scam-prevention department. A meeting room, an introduction, or help printing handouts is enough to begin.</p><Link href="/contact" className="doodle-button mt-8 inline-flex bg-[#176d5b] px-7 py-4 font-bold text-white">Tell us about your group</Link></div></div></section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl sm:text-6xl">Who we work with</h2><div className="mt-14 grid gap-6 sm:grid-cols-2">{partners.map(([title, text], index) => <article key={title} className={`doodle-card min-h-64 p-7 sm:p-9 ${index === 0 ? "bg-[#dfe9df]" : index === 1 ? "bg-[#176d5b] text-white" : index === 2 ? "bg-[#e6eee8]" : "bg-[#dfe9df]"}`}><p className="font-extrabold">0{index + 1}</p><h3 className="font-display mt-7 text-4xl leading-tight">{title}</h3><p className={`mt-4 max-w-lg text-lg leading-7 ${index === 1 ? "text-white" : "text-[#44504a]"}`}>{text}</p></article>)}</div></div></section>

      <section className="border-b border-[#111815] bg-[#e6eee8] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display max-w-3xl text-5xl leading-tight sm:text-6xl">Three ways to help</h2><div className="mt-12 grid gap-10 lg:grid-cols-3">{[["Host", "Provide a room, invite the group, and tell us what would be useful."], ["Sponsor", "Cover large-print guides, wallet cards, and take-home materials."], ["Introduce", "Connect us with a community, caregiver group, or local expert."]].map(([title, text]) => <article key={title} className="border-t border-[#111815] pt-7"><h3 className="font-display text-4xl">{title}</h3><p className="mt-5 text-lg leading-7 text-[#44504a]">{text}</p></article>)}</div></div></section>

      <section className="border-b border-[#111815] bg-[#111815] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">What we ask from a host</h2><p className="mt-6 text-xl leading-8 text-[#e6eee8]">A quiet, accessible room and one person who can help us understand the audience.</p></div><ul className="divide-y border-y border-white/50 text-xl">{["A room with chairs and a screen", "A clear arrival contact", "An estimated group size", "Any hearing, vision, or mobility needs", "The scams people have mentioned lately"].map((item) => <li key={item} className="py-5">✓ <span className="ml-3">{item}</span></li>)}</ul></div></section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[86rem]"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">What sponsorship supports</h2><p className="text-xl leading-8 text-[#5f6862]">Sponsorship keeps workshops and take-home materials easier for community groups to offer.</p></div><div className="mt-12 grid border-y-[3px] border-[#111815] sm:grid-cols-3">{["Large-print guides", "Trusted-contact cards", "Practice materials"].map((item, index) => <p key={item} className={`min-h-36 p-7 font-display text-3xl ${index < 2 ? "border-b border-[#111815] sm:border-b-0 sm:border-r" : ""}`}>{item}</p>)}</div></div></section>

      <section className="border-b border-[#111815] bg-[#dfe9df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-4xl sm:text-6xl">Not sure where you fit?</h2><p className="mt-5 max-w-3xl text-xl leading-8">Send a short note. We can usually tell within one conversation whether a workshop or another resource makes sense.</p></div></section>

      <section className="bg-[#dfe9df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-4xl text-4xl leading-tight sm:text-6xl">Let’s make the next step simple</h2><Link href="/contact" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Contact us</Link></div></section>
    </main>
  );
}
