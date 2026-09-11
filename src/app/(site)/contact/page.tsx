import { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/Site/InquiryForm";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = { title: "Contact", description: "Contact Shield Our Elders about workshops and community partnerships." };

export default function ContactPage() {
  return (
    <main className="bg-[#f4f7fb] text-[#17345c]">
      <PageHero title="Get in touch" intro="Ask about a workshop, offer a partnership, or tell us what your community has been seeing." image="/images/doodles/simple-partner-guide.svg" imageAlt="Two people sharing a printed safety guide" />

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><h2 className="font-display text-4xl leading-tight sm:text-5xl">Start with a few details</h2><p className="mt-6 text-lg leading-8 text-[#51657f]">Tell us who you serve, your approximate group size, and what kind of help you have in mind.</p><p className="mt-8 border-l-[6px] border-[#f3b83f] pl-5 text-lg font-bold">You do not need a final date or a complete plan.</p></div><div className="doodle-card bg-white p-6 sm:p-9"><InquiryForm /></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl sm:text-6xl">Who should reach out</h2><div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{["Senior communities", "Banks and credit unions", "Care teams", "Libraries", "Faith and community groups", "Families and caregivers"].map((item) => <p key={item} className="border-t-2 border-[#17345c] py-5 text-xl font-bold">{item}</p>)}</div></div></section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-4xl sm:text-5xl">Prefer regular email?</h2><Link href="mailto:projectshieldourelders@gmail.com" className="mt-6 block break-all text-xl font-bold text-[#b84236] underline decoration-2 underline-offset-4">projectshieldourelders@gmail.com</Link><p className="mt-5 text-lg text-[#51657f]">Brevard County, Florida</p></div><div><h2 className="font-display text-4xl sm:text-5xl">What happens next</h2><p className="mt-6 text-xl leading-8 text-[#51657f]">We read your note, ask any missing questions, and suggest a practical next step. There is no mailing list and no sales sequence.</p></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-display text-5xl leading-tight">Need help with the app?</h2><div><p className="text-xl leading-8 text-[#dce9f7]">Use the support page for technical problems, privacy requests, or help understanding a feature.</p><Link href="/support" className="doodle-button mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#17345c]">Go to app support</Link></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#f3b83f] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-4xl sm:text-5xl">If money or account access is at risk</h2><p className="mt-5 max-w-4xl text-xl leading-8">Do not wait for an email reply. Call your bank or card issuer using the number on the card or statement, then use our recovery guide.</p><Link href="/resources#recovery" className="mt-7 inline-flex border-b-2 border-[#17345c] pb-1 text-lg font-bold">Open the recovery guide</Link></div></section>

      <section className="bg-[#b7a7e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-4xl text-4xl leading-tight sm:text-6xl">A short note is enough to start</h2><Link href="mailto:projectshieldourelders@gmail.com" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Email us</Link></div></section>
    </main>
  );
}
