import { Metadata } from "next";
import Link from "next/link";
import ResourceLibrary from "@/components/Site/ResourceLibrary";

export const metadata: Metadata = {
  title: "Resources",
  description: "Printable checklists and official recovery links for calls, messages, payments, and exposed personal information.",
};

const officialLinks = [
   ["Report Fraud", "Federal Trade Commission", "https://reportfraud.ftc.gov/"],
  ["Start an Identity Theft Recovery Plan", "IdentityTheft.gov", "https://www.identitytheft.gov/"],
  ["Report Internet Crime", "FBI Internet Crime Complaint Center", "https://www.ic3.gov/"],
  ["Report a Social Security Scam", "Social Security Administration", "https://oig.ssa.gov/report/"],
];

export default function ResourcesPage() {
  return (
    <main className="story-page help-page">
      <section className="help-hero">
        <div><h1>Scam Help &amp; Resources</h1><p>If you received a suspicious call, text, email, or payment request, you do not need to figure out exactly what kind of scam it is before taking action. Choose the situation that best matches what happened.</p></div>
        <aside>
          <strong>Someone is contacting me right now</strong>
          <p>Stop responding for the moment. Do not send money, click a link, share a verification code, or give out personal information.</p>
          <p>If the person claims to represent an organization, contact it yourself using a phone number or website you already trust. Ask a family member, friend, caregiver, or another person you trust if you are unsure.</p>
        </aside>
      </section>

      <section className="help-library story-section" id="downloads">
        <header><h2>Printable Guides</h2><p>Each guide is a one-page PDF that you can print and keep nearby.</p></header>
        <ResourceLibrary />
      </section>

      <section className="help-recovery story-section" id="recovery">
        <header><h2>If You Already Sent Money or Information</h2><p>Act as soon as you realize something may be wrong.</p></header>
        <div className="help-recovery__flow">
          <article><h3>Contact your bank or payment provider</h3><p>Use the official number on your card, statement, or the company’s website. Explain what happened, ask what options are available for the transaction, and keep any case number they give you.</p></article>
          <article><h3>Protect your accounts</h3><p>If you shared a password, change it. Change it anywhere else you used the same password, starting with important email and banking accounts.</p></article>
          <article><h3>Save what you have</h3><p>Keep text messages, emails, receipts, screenshots, phone numbers, usernames, dates, times, and records of calls you make afterward. Do not delete the messages just because you know they were fraudulent.</p></article>
        </div>
        <p className="help-recovery__warning"><strong>Watch for recovery scams.</strong> Be careful if someone claims they can recover lost money, especially if they ask you to pay them first.</p>
      </section>

      <section className="help-exposure story-section">
        <h2>What Information Did You Share?</h2>
        <details><summary>Password</summary><p>Change the password immediately. If you used that password anywhere else, change it there too.</p></details>
        <details><summary>Debit or credit card</summary><p>Contact the bank or card issuer using the number on your card or official statement.</p></details>
        <details><summary>Social Security number</summary><p>Use the official identity-theft and Social Security resources below for guidance on what to do next.</p></details>
      </section>

      <section className="help-official story-section">
        <div><h2>Official Reporting and Recovery Resources</h2><p>Use official U.S. government websites when reporting fraud or identity theft. These links open in a new tab so this page stays available.</p></div>
        <nav aria-label="Official scam reporting websites">
          {officialLinks.map(([action, agency, href]) => <a key={href} href={href} target="_blank" rel="noreferrer"><span>{action}</span><strong>{agency}</strong></a>)}
        </nav>
      </section>

      <section className="help-plan story-section">
        <div className="help-plan__sheet"><strong>My scam-safety plan</strong><span>A person I trust to call</span><i /><span>My bank’s official phone number</span><i /><span>Another important organization</span><i /></div>
        <div><h2>Make a Plan Before You Need It</h2><p>Keeping trusted contacts and official phone numbers somewhere easy to find can make it easier to respond to a suspicious call or message. A printed copy beside the phone may be easier to use than searching online during a stressful conversation.</p><p>You may also want your family to agree on a simple way to verify unexpected emergency calls involving relatives.</p><Link href="/examples" className="secondary-button">View Scam Examples</Link></div>
      </section>
    </main>
  );
}
