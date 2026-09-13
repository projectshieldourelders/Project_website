import { Metadata } from "next";
import Link from "next/link";
import PartnerPath from "@/components/Site/PartnerPath";

export const metadata: Metadata = {
  title: "Partners",
  description: "Host, support, or introduce a Shield Our Elders workshop in Brevard County.",
};

export default function PartnersPage() {
  return (
    <main className="story-page partners-page">
      <section className="partners-hero">
        <p>For organizations that already have a relationship with older adults</p>
        <h1>A useful workshop starts with local trust.</h1>
        <div><span>You know the people</span><i aria-hidden="true" /><span>We prepare the practice</span></div>
      </section>

      <section className="partners-choice story-section">
        <header><h2>Choose the part that fits your organization</h2><p>One introduction or one room is enough to begin. You do not need a new department or a large event budget.</p></header>
        <PartnerPath />
      </section>

      <section className="partners-fit story-section">
        <div className="partners-fit__copy"><h2>Where a session can fit</h2><p>The strongest hosts are places people already visit for housing, care, learning, money, or community. We adjust the examples to the questions staff and families hear there.</p></div>
        <div className="partners-fit__names" aria-label="Types of partner organizations">
          <span>Senior communities</span>
          <span>Libraries</span>
          <span>Banks and credit unions</span>
          <span>Caregiver groups</span>
          <span>Faith communities</span>
          <span>Neighborhood organizations</span>
        </div>
      </section>

      <section className="partners-brief story-section">
        <h2>A short note is enough to plan the first conversation.</h2>
        <div>
          <p><strong>Tell us about the room.</strong> Who is likely to attend, roughly how many people, and what hearing, vision, language, or mobility needs should shape the session?</p>
          <p><strong>Share what people are encountering.</strong> Recent examples help us choose the right bank alert, family emergency call, delivery message, or payment request.</p>
          <p><strong>Name what is available.</strong> Chairs and one contact person matter most. A projector is useful but optional.</p>
        </div>
      </section>

      <section className="partners-materials story-section">
        <div><h2>Support stays visible after we leave.</h2><p>Funding helps cover large-print checklists, trusted-contact cards, and practice sheets. Those materials remain at home, at a front desk, or beside a telephone after the workshop ends.</p></div>
        <div className="partners-materials__receipt" aria-label="Example workshop materials supported">
          <span>Workshop material</span>
          <p>Large-print guides <strong>40</strong></p>
          <p>Trusted-contact cards <strong>40</strong></p>
          <p>Practice examples <strong>1 set</strong></p>
          <small>Quantities shown as an example for one community session.</small>
        </div>
      </section>

      <section className="partners-contact">
        <p>Based in Brevard County, Florida</p>
        <h2>Tell us who you serve. We will reply with a practical next step.</h2>
        <div><Link href="/contact" className="light-button">Contact Shield Our Elders</Link><Link href="/resources">Share the printable guides</Link></div>
      </section>
    </main>
  );
}
