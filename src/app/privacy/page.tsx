import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Shield Our Elders",
  description: "How Shield Our Elders handles app and website information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">
        Shield Our Elders
      </Link>
      <article className="legal-card">
        <p className="eyebrow">Effective July 20, 2026</p>
        <h1>Privacy Policy</h1>
        <p>
          Shield Our Elders is designed to be local-first. Most information you
          enter stays on your device. The app does not require an account, sell
          personal data, show third-party ads, or track you across other apps or
          websites.
        </p>
        <h2>Information stored on your device</h2>
        <p>
          The app may store settings, accessibility choices, trusted contacts, a
          family verification phrase, learning progress, practice scores, recent
          checks, onboarding status, and other preferences you choose to save.
        </p>
        <h2>Information you choose to check</h2>
        <p>
          You may choose to enter, upload, or scan messages, emails, notes, URLs,
          QR-code links, screenshots, voicemail files, audio files, phone numbers,
          caller notes, payment choices, or safety checklist answers.
        </p>
        <h2>Outside providers</h2>
        <p>
          Some checks may send selected content to outside providers, including
          Hugging Face-hosted models and, if enabled, OpenAI services. Depending
          on the feature, this may include pasted text, URLs, screenshot image
          data, voicemail or audio data, transcripts, or extracted screenshot
          text.
        </p>
        <p>
          Before sending text for certain checks, the app tries to shorten the
          text and mask obvious sensitive data such as email addresses and long
          number patterns. This masking is not perfect.
        </p>
        <h2>Permissions</h2>
        <p>
          The app may ask for camera access to scan QR codes, photo access when
          you choose a screenshot, notification permission for reminders, and
          phone or SMS actions when you choose to contact a trusted person. The
          app does not automatically place calls or send texts without your action.
        </p>
        <h2>What we do not do</h2>
        <p>
          The app does not automatically read calls, text messages, emails,
          contacts, photos, microphone, location, or browsing activity. We do not
          sell personal data, use it for third-party advertising, or create
          advertising profiles.
        </p>
        <h2>Your choices</h2>
        <p>
          You can delete local app data in Settings by using Delete all my data.
          You can also control app permissions in iOS or Android Settings.
        </p>
        <h2>Contact</h2>
        <p>
          Questions or requests about this Privacy Policy may be sent to{" "}
          <a href="mailto:projectshieldourelders@gmail.com">
            projectshieldourelders@gmail.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
