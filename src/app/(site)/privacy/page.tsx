import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shield Our Elders.",
};

const sections = [
  {
    title: "What the app does",
    body: "Shield Our Elders helps people check suspicious messages, calls, links, QR codes, emails, payment requests, screenshots, and voicemail transcripts. The app is designed to help users slow down, verify claims, and contact someone trusted before acting.",
  },
  {
    title: "Information you choose to provide",
    body: "The app only reviews content you choose to enter, upload, scan, or share with it. This may include pasted message text, email text, URLs, phone numbers, QR code contents, screenshots, audio files, voicemail transcripts, trusted contact details, settings, learning progress, and support messages you send us.",
  },
  {
    title: "Information the app does not automatically read",
    body: "Shield Our Elders does not automatically read your calls, text messages, emails, contacts, photos, microphone, location, browsing history, bank accounts, passwords, or payment apps. You stay in control of what is checked.",
  },
  {
    title: "Model-powered checks",
    body: "Some safety checks may send selected content to service providers that run scam-review, OCR, speech-to-text, hosting, security, analytics, or reliability services. Submitted content may be processed with technical information needed to return a result, such as IP address, request time, device information, and service logs. These checks are used for app functionality, not advertising or tracking.",
  },
  {
    title: "Trusted contacts",
    body: "Trusted contact names and phone numbers are stored for user-directed contact actions, such as calling or texting a family member or caregiver. The app does not contact trusted people unless the user chooses that action.",
  },
  {
    title: "How information is used",
    body: "We use information to provide scam-safety checks, explain risk signals, show next steps, save settings, maintain learning progress, prevent duplicate check requests, improve reliability, respond to support requests, and meet legal or safety obligations.",
  },
  {
    title: "Sharing",
    body: "We do not sell personal information. We share information only with service providers needed to operate selected features, when required by law, to protect safety and security, or when a user chooses to share information with a trusted contact through their own phone or messaging app.",
  },
  {
    title: "Limits of the service",
    body: "Shield Our Elders is a scam-awareness and safety-support tool. It is not a bank, law firm, credit bureau, police department, emergency service, or guaranteed fraud-detection system. Results may be incomplete or wrong, so urgent situations should be verified through official channels.",
  },
  {
    title: "Contact",
    body: "For privacy questions, support, corrections, or deletion requests, email projectshieldourelders@gmail.com. We will review requests and respond as soon as reasonably possible.",
  },
];

const PrivacyPage = () => {
  return (
    <>
      <HeroSub title="Privacy Policy" />
      <section className="bg-[#fffdf8] py-16 dark:bg-dark lg:py-24">
        <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Effective July 28, 2026
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-midnight_text dark:text-white md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-dustGray dark:text-white/85">
              This policy explains how Shield Our Elders handles information when someone uses the app or website.
            </p>

            <div className="mt-12 divide-y divide-[#d5dfd8] border-y border-[#d5dfd8] dark:divide-dark_border dark:border-dark_border">
              {sections.map((section) => (
                <div key={section.title} className="py-8">
                  <h2 className="text-2xl font-semibold text-midnight_text dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-dustGray dark:text-white/85">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
