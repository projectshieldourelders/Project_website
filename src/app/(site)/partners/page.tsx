import { Metadata } from "next";
import Link from "next/link";
import AnimatedPageHero from "@/components/Site/AnimatedPageHero";

export const metadata: Metadata = {
  title: "Partners",
  description: "Bring a Shield Our Elders scam-prevention workshop to your community.",
};

const partnerTypes = [
  ["Senior living communities", "Host a workshop for residents, family members, or staff. We can focus the session on the types of scams your community has been seeing."],
  ["Banks and credit unions", "Help customers recognize suspicious payment requests, fake account alerts, and other common financial scams."],
  ["Caregivers and care organizations", "Give staff and families practical steps they can use when an older adult receives a suspicious call or message."],
  ["Libraries and community organizations", "Offer a workshop in a place people already know and trust."],
];

const waysToHelp = [
  ["Host a workshop", "Provide a space, invite participants, and let us know what would be most helpful for your group."],
  ["Support workshop materials", "Help cover the cost of printed guides, trusted-contact cards, and other materials participants can take home."],
  ["Make an introduction", "Connect us with a senior community, caregiver organization, library, financial institution, or another group that may be interested."],
];

export default function PartnersPage() {
  return (
    <main className="story-page story-page--partners">
      <AnimatedPageHero
        variant="partners"
        title="Bring a workshop to your community"
        intro="We work with organizations that already serve older adults and want to give people practical ways to respond to scams. You do not need a large program or special department to get started."
      />

      <section className="story-section partner-opening">
        <div className="story-wrap story-split">
          <div><h2>There are a few simple ways to work with us</h2><p>A partnership could mean hosting one workshop, helping us reach a group that would benefit, or supporting the materials participants take home.</p></div>
          <Link href="/contact" className="primary-button">Tell us about your group</Link>
        </div>
      </section>

      <section className="story-section partner-types">
        <div className="story-wrap">
          <h2>Who we work with</h2>
          <div className="partner-type-list">
            {partnerTypes.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="story-section ways-to-help">
        <div className="story-wrap story-split">
          <h2>Ways you can help</h2>
          <div>
            {waysToHelp.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="story-section host-needs">
        <div className="story-wrap story-split">
          <div><h2>What we need from a workshop host</h2><p>We try to keep the setup simple. If something on this list is not available, reach out anyway. We may still be able to make the workshop work.</p></div>
          <ul>
            <li>A room with chairs</li>
            <li>A screen or projector, if available</li>
            <li>One contact person for the day</li>
            <li>An estimated number of participants</li>
            <li>Information about hearing, vision, or mobility needs</li>
            <li>Examples of scams people have been asking about</li>
          </ul>
        </div>
      </section>

      <section className="story-section sponsorship-section">
        <div className="story-wrap">
          <div className="section-intro"><h2>What financial support helps provide</h2><p>Support from local organizations can help us provide workshops and printed materials at little or no cost to the groups attending.</p></div>
          <div className="sponsorship-flow">
            <article><span>Guide</span><h3>Large-print guides</h3><p>Printed scam-prevention guides that participants can keep at home.</p></article>
            <article><span>Card</span><h3>Trusted-contact cards</h3><p>Small cards where participants can write down the people they want to call before sending money or sharing information.</p></article>
            <article><span>Session</span><h3>Workshop materials</h3><p>Printed examples and other materials used during the session.</p></article>
          </div>
        </div>
      </section>

      <section className="story-section open-idea">
        <div className="story-wrap story-split">
          <div><h2>Have another idea?</h2><p>You do not have to fit into one of the categories above. If your organization works with older adults, families, caregivers, or the broader community, send us a message and tell us what you have in mind.</p><p>We can figure out whether a workshop, printed resources, or another type of collaboration would be useful.</p></div>
          <Link href="/contact" className="secondary-button">Contact us</Link>
        </div>
      </section>

      <section className="story-section partner-cta">
        <div className="story-wrap story-split"><div><h2>Help your community prepare before the next suspicious call.</h2><p>You can also share our free scam-prevention guides with the people you serve.</p></div><Link href="/resources" className="light-button">Open the free guides</Link></div>
      </section>
    </main>
  );
}
