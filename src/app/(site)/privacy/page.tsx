import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPage = () => {
  return (
    <>
      <HeroSub title="Privacy Policy" />
      <section className="lg:py-24 py-16 dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-muted dark:text-white/70">
              Shield Our Elders helps people review suspicious calls, messages,
              links, QR codes, emails, payment requests, and scam situations.
              The app may process text, screenshots, links, phone numbers, QR
              codes, and audio or voicemail transcripts that users choose to
              submit so it can provide a safety explanation. Trusted contact
              details are used only for the contact actions chosen by the user.
              We do not sell personal information. Some checks may be processed
              through secure service providers, including AI, OCR,
              speech-to-text, security lookup, hosting, analytics, and crash
              reporting providers. Users should avoid submitting sensitive
              financial, medical, password, Social Security, or full account
              information unless it is needed to understand the concern. Data is
              protected using reasonable safeguards, but no system is perfect.
              Users can contact us to request help, corrections, or deletion of
              information where required by law.
            </p>
            <p className="text-lg leading-8 text-muted dark:text-white/70 mt-7">
              Shield Our Elders is a safety support tool, not a bank, police
              department, law firm, credit bureau, or emergency service. If money
              was sent, an account was accessed, or personal information was
              shared, users should contact their bank, card issuer, official
              company support line, local authorities, or trusted caregiver
              right away.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
