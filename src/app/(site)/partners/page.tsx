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
        <h1>Partner With Shield Our Elders</h1>
        <p>Shield Our Elders works with local organizations in Brevard County to provide scam-prevention workshops and distribute practical resources for older adults. Organizations can host a workshop, share our materials, make an introduction, or help cover the cost of printed resources.</p>
        <div><span>Local organizations know their communities</span><i aria-hidden="true" /><span>We provide workshops and practical resources</span></div>
      </section>

      <section className="partners-choice story-section">
        <header><h2>Ways to Work With Us</h2><p>Shield Our Elders works with local organizations in Brevard County to provide scam-prevention workshops and distribute practical resources for older adults. You can host a workshop, share our materials, make an introduction, or help cover printing costs.</p></header>
        <PartnerPath />
      </section>

      <section className="partners-fit story-section">
        <div className="partners-fit__copy"><h2>Organizations We Can Work With</h2><p>If your organization serves older adults, families, caregivers, or the broader community, you can still contact us even if it is not listed here.</p></div>
        <div className="partners-fit__names" aria-label="Types of partner organizations">
          <span>Senior communities</span>
          <span>Libraries</span>
          <span>Banks and credit unions</span>
          <span>Caregiver groups</span>
          <span>Faith communities</span>
          <span>Neighborhood associations</span>
          <span>Community centers</span>
          <span>Local nonprofits</span>
        </div>
      </section>

      <section className="partners-brief story-section">
        <h2>What We Need From a Host</h2>
        <div>
          <p><strong>A place to meet.</strong> A room with seating is enough. A screen or projector is helpful, but we can plan around what is available.</p>
          <p><strong>An estimated group size and one contact person.</strong> This helps us prepare enough printed materials and coordinate the day of the workshop.</p>
          <p><strong>Accessibility needs and topics of concern.</strong> Tell us about hearing, vision, mobility, or language needs and the types of scams your members have been receiving.</p>
        </div>
      </section>

      <section className="partners-materials story-section">
        <div><h2>What We Provide</h2><p>A typical workshop includes a 45–60 minute presentation, realistic examples, guided practice, large-print take-home materials, time for questions, and additional resources participants can use afterward. We adjust the session to the group and available time.</p></div>
        <div className="partners-materials__receipt" aria-label="Example workshop materials supported">
          <p>Large-print guides <strong>40</strong></p>
          <p>Trusted-contact cards <strong>40</strong></p>
          <p>Workshop examples <strong>1 set</strong></p>
          <small>Example materials for a session of approximately 40 participants. Actual quantities depend on attendance and session type.</small>
        </div>
      </section>

      <section className="partners-contact">
        <h2>Interested in Working With Us?</h2>
        <div><Link href="/contact" className="light-button">Contact Shield Our Elders</Link><Link href="/program">View Workshop Information</Link></div>
      </section>
    </main>
  );
}
