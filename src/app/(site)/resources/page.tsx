import { Metadata } from "next";
import Link from "next/link";
import ResourceLibrary from "@/components/Site/ResourceLibrary";

export const metadata: Metadata = {
  title: "Resources",
  description: "Printable checklists and official recovery links for calls, messages, payments, and exposed personal information.",
};

const officialLinks = [
  ["Report fraud", "Federal Trade Commission", "https://reportfraud.ftc.gov/"],
  ["Build an identity recovery plan", "IdentityTheft.gov", "https://www.identitytheft.gov/"],
  ["Report internet crime", "FBI Internet Crime Complaint Center", "https://www.ic3.gov/"],
  ["Report a Social Security scam", "Social Security Administration", "https://oig.ssa.gov/report/"],
];

export default function ResourcesPage() {
  return (
    <main className="story-page help-page">
      <section className="help-hero">
        <div><h1>Start with what happened.</h1><p>You do not need to identify the exact scam before taking a safe first step. Choose the situation below and keep the guide open while you make the next call.</p></div>
        <aside>
          <strong>If someone is contacting you now</strong>
          <p>Stop replying. Do not click, pay, or share a code. Call a person you know using a number that did not come from the message.</p>
        </aside>
      </section>

      <section className="help-library story-section" id="downloads">
        <header><h2>Printable help, organized by situation</h2><p>Every download is a one-page PDF made for home printing.</p></header>
        <ResourceLibrary />
      </section>

      <section className="help-recovery story-section">
        <header><h2>If money has left the account</h2><p>Speed matters more than finding the perfect words. Use official contact information and keep a record of every call.</p></header>
        <div className="help-recovery__flow">
          <article><h3>Bank or payment company</h3><p>Ask whether the transaction can be stopped, disputed, or recalled. Request a case number.</p></article>
          <article><h3>Secure exposed accounts</h3><p>Change reused passwords, begin with email and banking, and turn on two-step verification.</p></article>
          <article><h3>Preserve the trail</h3><p>Save receipts, screenshots, dates, phone numbers, email addresses, and the names of people you spoke with.</p></article>
        </div>
        <p className="help-recovery__warning">Be wary of anyone who promises to recover lost money for an upfront fee. Recovery offers are often a second scam.</p>
      </section>

      <section className="help-exposure story-section">
        <h2>Match the response to what was shared</h2>
        <details><summary>Password</summary><p>Change it on the affected account and anywhere else it was reused. Begin with email because password-reset messages often arrive there.</p></details>
        <details><summary>Debit or credit card</summary><p>Call the number printed on the card. Ask about replacement and review recent transactions with the bank.</p></details>
        <details><summary>Social Security number</summary><p>Use IdentityTheft.gov for a recovery plan and consider freezing your credit with each major credit bureau.</p></details>
      </section>

      <section className="help-official story-section">
        <div><h2>Go directly to the agency</h2><p>These are official U.S. government websites. They open in a new tab so this page stays available.</p></div>
        <nav aria-label="Official scam reporting websites">
          {officialLinks.map(([action, agency, href]) => <a key={href} href={href} target="_blank" rel="noreferrer"><span>{action}</span><strong>{agency}</strong></a>)}
        </nav>
      </section>

      <section className="help-plan story-section">
        <div className="help-plan__sheet"><strong>My no-pressure plan</strong><span>Person I will call</span><i /><span>Bank number from my card</span><i /><span>Family verification phrase</span><i /></div>
        <div><h2>Write the plan while nothing is urgent.</h2><p>A paper copy beside the phone can be easier to use than searching during a stressful conversation.</p><Link href="/examples" className="secondary-button">Practice with examples</Link></div>
      </section>
    </main>
  );
}
