import { Metadata } from "next";
import Link from "next/link";
import AnimatedPageHero from "@/components/Site/AnimatedPageHero";
import PrintButton from "@/components/Common/PrintButton";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "Resources",
  description: "Printable scam-prevention and recovery guides for older adults and families.",
};

const downloads = [
  ["Suspicious Call Checklist", "Five simple steps to use when a caller is asking for money, personal information, or a code.", "/guides/suspicious-call-checklist.pdf"],
  ["Suspicious Message Checklist", "A quick checklist to use before replying to a strange text, clicking a link, or downloading something.", "/guides/suspicious-message-checklist.pdf"],
  ["After a Scam: What to Do Next", "Steps to take if money was sent or an account may have been affected.", "/guides/after-a-scam-recovery-guide.pdf"],
  ["My Trusted-Contact Plan", "A printable page for important names, phone numbers, and a family verification phrase.", "/guides/trusted-contact-plan.pdf"],
];

const immediateSteps = [
  ["Stop replying", "Do not keep talking just because someone is pressuring you."],
  ["Do not click", "Avoid links, attachments, QR codes, or downloads sent in the message."],
  ["Do not send money", "Do not send a payment until you have checked the story another way."],
  ["Call someone you trust", "Tell a family member, friend, caregiver, neighbor, or staff member what happened."],
  ["Check using an official source", "Call a number you already know or find the organization’s official website yourself."],
];

const reports = [
  ["Federal Trade Commission", "Report fraud and scams.", "Report a scam", "https://reportfraud.ftc.gov/"],
  ["IdentityTheft.gov", "Create a recovery plan if personal information was stolen or misused.", "Start a recovery plan", "https://www.identitytheft.gov/"],
  ["FBI Internet Crime Complaint Center", "Report certain internet-related crimes and scams.", "Report internet crime", "https://www.ic3.gov/"],
  ["Social Security Administration", "Report scams involving Social Security.", "Report a Social Security scam", "https://oig.ssa.gov/report/"],
];

export default function ResourcesPage() {
  return (
    <main className="story-page story-page--resources">
      <AnimatedPageHero
        variant="resources"
        title="Not sure what to do next?"
        intro="Start with what is happening right now. These guides walk you through simple steps for suspicious calls, messages, payments, and account problems."
      />

      <section id="downloads" className="story-section download-library">
        <div className="story-wrap">
          <div className="section-intro"><h2>Download and print</h2><p>We made these one-page guides so they can be kept somewhere easy to find, like next to the phone, on the refrigerator, or in a folder at home.</p></div>
          <div className="download-shelf">
            {downloads.map(([title, description, file], index) => (
              <a key={file} href={assetPath(file)} download className="paper-download">
                <span className="paper-download__number">0{index + 1}</span>
                <span><strong>{title}</strong><small>{description}</small></span>
                <span className="paper-download__action">Download one-page guide</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section immediate-help">
        <div className="story-wrap story-split">
          <div><h2>If the call or message is happening right now</h2><p>Use these steps in order. You do not have to keep a caller or sender waiting while you decide.</p></div>
          <ol>
            {immediateSteps.map(([title, body], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="story-section recovery-path">
        <div className="story-wrap">
          <div className="section-intro"><h2>If you already sent money</h2><p>Act as soon as you can and use official contact information.</p></div>
          <ol>
            <li><strong>Contact the bank or payment company</strong><p>Tell them what happened and ask whether the payment can be stopped, disputed, or reversed.</p></li>
            <li><strong>Protect your accounts</strong><p>Change passwords for any accounts that may have been affected. Turn on two-step verification when it is available.</p></li>
            <li><strong>Save what happened</strong><p>Keep screenshots, receipts, messages, phone numbers, email addresses, and dates.</p></li>
            <li><strong>Report the scam</strong><p>Use the official government reporting websites listed below.</p></li>
            <li><strong>Be careful of follow-up scams</strong><p>Someone may claim they can recover your money. Be especially careful if they ask for another payment first.</p></li>
          </ol>
        </div>
      </section>

      <section className="story-section personal-info">
        <div className="story-wrap">
          <h2>If you shared personal information</h2>
          <div className="personal-info__rows">
            <article><h3>Passwords</h3><p>Change the password for the affected account. If you used the same password anywhere else, change it there too. Start with email, banking, and payment services.</p></article>
            <article><h3>Credit or debit card information</h3><p>Call the bank or card company using the number printed on the card or listed on the official website. Ask whether the card should be replaced and whether there are suspicious transactions.</p></article>
            <article><h3>Social Security number</h3><p>Visit IdentityTheft.gov for recovery steps. You may also want to consider placing a credit freeze with the major credit bureaus.</p></article>
          </div>
        </div>
      </section>

      <section className="story-section official-reports">
        <div className="story-wrap">
          <div className="section-intro"><h2>Official places to report scams</h2><p>These links go directly to U.S. government websites.</p></div>
          <div className="official-report-list">
            {reports.map(([title, body, action, href]) => <a key={href} href={href} target="_blank" rel="noreferrer"><span><strong>{title}</strong><small>{body}</small></span><span>{action}</span></a>)}
          </div>
        </div>
      </section>

      <section className="story-section trusted-plan">
        <div className="story-wrap story-split">
          <div><h2>Make a trusted-contact plan</h2><p>Choose one or two people you can contact before sending money, sharing a code, or giving someone personal information. Write their phone numbers somewhere you can reach without using the suspicious message.</p><p>A family verification phrase can help if someone calls pretending to be a relative.</p></div>
          <div className="trusted-plan__sheet">
            <strong>My trusted contacts</strong>
            <label>Name <span /></label><label>Phone number <span /></label>
            <label>Name <span /></label><label>Phone number <span /></label>
            <label>Family verification phrase <span /></label>
          </div>
        </div>
      </section>

      <section className="story-section resource-close">
        <div className="story-wrap story-split">
          <div><h2>Keep a paper copy somewhere easy to find</h2><p>A printed guide can be useful when you do not want to search online during a stressful call. Keep one near the phone, on the refrigerator, or with other important documents.</p></div>
          <PrintButton />
        </div>
        <div className="story-wrap resource-close__practice"><div><h2>Want to practice?</h2><p>Try a few example scams and see what warning signs you notice.</p></div><Link href="/examples" className="light-button">Try scam examples</Link></div>
      </section>
    </main>
  );
}
