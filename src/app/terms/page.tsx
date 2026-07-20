import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Shield Our Elders",
  description: "Terms for using Shield Our Elders.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">
        Shield Our Elders
      </Link>
      <article className="legal-card">
        <p className="eyebrow">Effective July 20, 2026</p>
        <h1>Terms of Service</h1>
        <p>
          Shield Our Elders is a scam-safety education app for older adults,
          families, caregivers, and community helpers. By using the app, you agree
          to these Terms.
        </p>
        <h2>What the app does</h2>
        <p>
          The app can help review suspicious messages, calls, emails, links, QR
          codes, screenshots, payment requests, and voicemail transcripts. It can
          also show learning tips, practice examples, trusted-contact tools,
          reminders, and recovery steps.
        </p>
        <h2>Educational use only</h2>
        <p>
          The app is educational only. It is not a bank, lawyer, doctor, police
          agency, emergency service, cybersecurity company, tax expert, or
          financial advisor. It does not replace qualified professional help.
        </p>
        <h2>No guarantee</h2>
        <p>
          Scams change quickly. The app can make mistakes. It may miss a scam,
          mark a safe message as risky, or give an incomplete explanation. Treat
          the app as a second opinion, not a final decision.
        </p>
        <h2>Emergency and recovery</h2>
        <p>
          If you are in immediate danger, call your local emergency number. If
          money, passwords, account access, identity information, or device access
          may have been exposed, contact your bank, card issuer, payment provider,
          local authorities, and a trusted person as soon as possible.
        </p>
        <h2>Your responsibility</h2>
        <p>
          You are responsible for what you paste, upload, scan, save, send, call,
          text, open, report, or share. Before sending money, sharing codes,
          opening links, giving remote access, or responding to urgent requests,
          verify through an official number, official website, or trusted person.
        </p>
        <h2>Third-party services</h2>
        <p>
          Some optional features may use outside providers for AI analysis, spam
          detection, screenshot text extraction, speech-to-text, link review,
          hosting, or similar services. Their own terms and privacy practices may
          apply.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these Terms may be sent to{" "}
          <a href="mailto:projectshieldourelders@gmail.com">
            projectshieldourelders@gmail.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
