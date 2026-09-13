import { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/Site/InquiryForm";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = { title: "Contact", description: "Contact Shield Our Elders about workshops and community partnerships." };

export default function ContactPage() {
  return (
    <main className="bg-[#f7f6f0] text-[#111815]">
      <PageHero title="Contact Shield Our Elders" intro="Interested in hosting a workshop, partnering with us, or sharing a concern you are seeing in your community? Send us a message and tell us a little about what you have in mind." />

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><h2 className="font-display text-4xl leading-tight sm:text-5xl">Request a Workshop or Partnership</h2><p className="mt-6 text-lg leading-8 text-[#5f6862]">You do not need to have every detail figured out before contacting us. A few basic details are enough to get started.</p><p className="mt-8 border-l-[6px] border-[#dfe9df] pl-5 text-lg font-bold">Group size, topics, preferred dates, accessibility needs, and questions are helpful, but optional.</p></div><div className="doodle-card bg-white p-6 sm:p-9"><InquiryForm /></div></div></section>

      <section className="border-b border-[#111815] bg-[#e6eee8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl sm:text-6xl">Who We Work With</h2><p className="mt-5 max-w-3xl text-lg leading-8">Not sure whether your organization fits? You can still reach out.</p><div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{["Senior living communities", "Libraries", "Banks and credit unions", "Healthcare and caregiving organizations", "Faith communities", "Neighborhood and civic groups", "Families and caregivers", "Other community organizations"].map((item) => <p key={item} className="border-t-2 border-[#111815] py-5 text-xl font-bold">{item}</p>)}</div></div></section>

      <section className="border-b border-[#111815] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-4xl sm:text-5xl">Email Us Directly</h2><Link href="mailto:projectshieldourelders@gmail.com" className="mt-6 block break-all text-xl font-bold text-[#1f5f52] underline decoration-2 underline-offset-4">projectshieldourelders@gmail.com</Link><p className="mt-5 text-lg text-[#5f6862]">Shield Our Elders<br />Brevard County, Florida</p></div><div><h2 className="font-display text-4xl sm:text-5xl">What Happens After You Contact Us</h2><p className="mt-6 text-xl leading-8 text-[#5f6862]">We will review your message and follow up about your request. For a workshop, we may ask about attendance, preferred dates, location, topics, presentation equipment, and accessibility needs. From there, we can discuss whether a session is a good fit and what the next steps would be.</p></div></div></section>

      <section className="border-b border-[#111815] bg-[#111815] px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-display text-5xl leading-tight">App Support</h2><div><p className="text-xl leading-8 text-[#e6eee8]">If you are having a technical problem with the Shield Our Elders app or website, use the support page instead.</p><Link href="/support" className="doodle-button mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#111815]">Go to App Support</Link></div></div></section>

      <section className="border-b border-[#111815] bg-[#dfe9df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-4xl sm:text-5xl">If You May Have Already Been Scammed</h2><p className="mt-5 max-w-4xl text-xl leading-8">Do not wait for a response from Shield Our Elders if money, account access, or personal information may be at risk. Contact your bank, card issuer, or other affected organization directly using official contact information.</p><Link href="/resources#recovery" className="mt-7 inline-flex border-b-2 border-[#111815] pb-1 text-lg font-bold">View Scam Recovery Resources</Link></div></section>
    </main>
  );
}
