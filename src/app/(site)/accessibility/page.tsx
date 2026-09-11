import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = { title: "Accessibility", description: "Accessibility features and commitments for Shield Our Elders." };

export default function AccessibilityPage() {
  return (
    <main className="bg-[#f4f7fb] text-[#17345c]">
      <PageHero title="Made to be easier to use" intro="Clear words, large controls, strong contrast, and fewer surprises." image="/images/doodles/simple-workshop.svg" imageAlt="Older adults learning together at an accessible workshop" imagePosition="center bottom" />

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Reading options stay with you</h2><p className="mt-6 text-xl leading-8 text-[#51657f]">Use the Reading options button in the header to enlarge text, increase contrast, or reduce motion. Your choices are saved on this device.</p></div><div className="doodle-card bg-[#f3b83f] p-7 sm:p-9"><p className="font-display text-3xl">Try it now</p><ol className="mt-7 space-y-5 text-xl"><li>1. Open “Reading options.”</li><li>2. Choose A, A+, or A++.</li><li>3. Turn on higher contrast or reduced motion.</li></ol></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl sm:text-6xl">Website choices</h2><div className="mt-12 grid gap-7 md:grid-cols-3">{[["Readable type", "Atkinson Hyperlegible body text with generous spacing."], ["Large targets", "Buttons and controls are designed to be easier to tap."], ["Keyboard access", "Links, menus, and forms can be used without a mouse."], ["Visible focus", "A strong outline shows where keyboard focus is."], ["Plain language", "Short instructions and familiar words come first."], ["Motion control", "Animations stop when Reduce Motion is requested."]].map(([title, text], index) => <article key={title} className={`border-t-[3px] border-[#17345c] pt-6 ${index > 2 ? "md:mt-5" : ""}`}><h3 className="font-display text-3xl">{title}</h3><p className="mt-4 text-lg leading-7 text-[#51657f]">{text}</p></article>)}</div></div></section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><h2 className="font-display text-5xl leading-tight sm:text-6xl">Workshop access</h2><div><p className="text-xl leading-8 text-[#51657f]">Hosts can tell us about hearing, vision, mobility, language, or seating needs before the session. We can slow the pace, repeat instructions, describe visual examples, and provide large-print materials.</p><Link href="/contact" className="doodle-button mt-8 inline-flex bg-[#3977f6] px-7 py-4 font-bold text-white">Tell us what you need</Link></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl sm:text-6xl">Works with personal settings</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{["Browser zoom up to 200%", "Device text and contrast settings", "Reduced Motion preferences", "Screen readers and keyboard navigation"].map((item) => <p key={item} className="border-t-2 border-[#f3b83f] pt-5 text-xl font-bold">{item}</p>)}</div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#f3b83f] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-4xl sm:text-5xl">Accessibility is ongoing work</h2><p className="mt-5 max-w-4xl text-xl leading-8">We test common tasks, improve unclear language, and fix barriers as we find them. The goal is not a label. It is a site and program people can actually use.</p></div></section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-display text-5xl leading-tight">Found a barrier?</h2><div><p className="text-xl leading-8 text-[#51657f]">Tell us which page or activity was difficult, what device you used, and what you expected to happen.</p><Link href="mailto:projectshieldourelders@gmail.com?subject=Accessibility%20feedback" className="mt-7 inline-flex border-b-2 border-[#17345c] pb-1 text-xl font-bold">Email accessibility feedback</Link></div></div></section>

      <section className="bg-[#b7a7e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-4xl text-4xl leading-tight sm:text-6xl">Use the format that works for you</h2><Link href="/resources" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Open resources</Link></div></section>
    </main>
  );
}
