import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "About",
  description: "Why Shield Our Elders teaches scam-prevention through practice and conversation.",
};

export default function AboutPage() {
  return (
    <main className="story-page profile-page">
      <section className="about-photo-hero">
        <div className="about-photo-hero__title">
          <h1>About Shield Our Elders</h1>
          <div>
            <p>Shield Our Elders is a Brevard County community project focused on helping older adults recognize scams, verify suspicious requests, and respond safely.</p>
            <p>We started the project because knowing that scams exist is not always enough. The difficult part is recognizing one while it is happening, especially when someone is creating urgency, fear, or pressure.</p>
          </div>
        </div>
        <div className="about-photo-hero__photo">
          <Image src={assetPath("/images/photos/workshop-verification.jpg")} alt="Shield Our Elders presenters and participants discussing verification codes at a community workshop" fill priority sizes="100vw" />
          <span className="photo-note photo-note--screen">The code example everyone worked through together</span>
          <span className="photo-note photo-note--room">Questions stayed open throughout the session</span>
        </div>
      </section>

      <section className="about-origin story-section">
        <blockquote>Stop before responding. Verify the request yourself. Ask another person if you are unsure.</blockquote>
        <div>
          <h2>Why we started</h2>
          <p>Many scam-prevention resources explain what a scam looks like after the fact. Our goal is different.</p>
          <p>We want people to practice what to do during the moment itself: when a caller claims there is an emergency, when a message asks for a verification code, or when someone is being pressured to send money quickly.</p>
          <p>During our workshops, we use realistic examples and walk through the decisions people may have to make. Participants learn how to slow the situation down, verify information independently, and involve someone they trust before taking action.</p>
        </div>
      </section>

      <section className="about-principles story-section">
        <h2>What happens during a workshop</h2>
        <div className="about-principles__tape">
          <article><h3>Participation is optional</h3><p>No one is required to speak, answer a question, or share a personal experience. Participants can listen, take notes, ask questions, or attend with a family member or caregiver.</p></article>
          <article><h3>We use situations people actually encounter</h3><p>Examples may include fake bank alerts, family emergency scams, delivery messages, government impersonation, gift-card requests, remote-access scams, verification-code requests, suspicious links, and QR codes. We update examples as tactics change.</p></article>
          <article><h3>Questions are encouraged</h3><p>If participants have questions about caller ID, online payments, text messages, artificial intelligence, QR codes, or another topic, we can spend more time on it. The goal is to make sure people leave knowing what they can actually do.</p></article>
        </div>
      </section>

      <section className="about-local story-section">
        <div className="about-local__map" aria-hidden="true"><span>Brevard County</span><i /><i /><i /><i /></div>
        <div>
          <h2>Built for Brevard County</h2>
          <p>Shield Our Elders works with older adults, families, caregivers, community organizations, and local professionals throughout Brevard County.</p>
          <p>The questions we hear during workshops help us improve future sessions and create better resources. If several people are confused by the same type of scam or verification process, that becomes something we address more clearly the next time.</p>
          <Link href="/partners" className="text-link">Partner with Shield Our Elders</Link>
        </div>
      </section>

      <section className="about-team story-section">
        <div><h2>Who is involved</h2><p>Shield Our Elders is a small, community-led project supported by students, volunteers, community organizations, and local advisors.</p></div>
        <dl>
          <div><dt>Project leadership</dt><dd>Organizes workshops, develops educational material, researches current scam tactics, and coordinates with community partners.</dd></div>
          <div><dt>Workshop volunteers</dt><dd>Help lead activities, answer questions, prepare materials, and assist participants during sessions.</dd></div>
          <div><dt>Community partners and advisors</dt><dd>Help us understand the problems older adults are encountering and connect the project with the people who can benefit from it.</dd></div>
        </dl>
      </section>

      <section className="about-approach story-section">
        <div>
          <h2>Our approach</h2>
          <p>We do not want scam education to make people afraid of every phone call, message, or website. We want people to feel more confident about what to do when something seems unusual.</p>
          <p>Stop before responding. Verify the request using contact information you find yourself. Do not let someone pressure you into acting immediately. Ask another person if you are unsure. If something has already happened, act quickly and get help.</p>
        </div>
      </section>

      <section className="about-close">
        <h2>Want to bring Shield Our Elders to your organization?</h2>
        <div><Link href="/program" className="light-button">Learn about our workshops</Link><Link href="/partners">Partner with Shield Our Elders</Link></div>
      </section>
    </main>
  );
}
