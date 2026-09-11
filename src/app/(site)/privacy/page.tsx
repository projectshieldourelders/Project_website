import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shield Our Elders.",
};

const sections = [
  { title: "What the app does", body: "Shield Our Elders helps people check suspicious messages, calls, links, QR codes, emails, payment requests, screenshots, and voicemail transcripts. The app is designed to help users slow down, verify claims, and contact someone trusted before acting." },
  { title: "Information you choose to provide", body: "The app only reviews content you choose to enter, upload, scan, or share with it. This may include pasted message text, email text, URLs, phone numbers, QR code contents, screenshots, audio files, voicemail transcripts, trusted contact details, settings, learning progress, and support messages you send us." },
  { title: "Information the app does not automatically read", body: "Shield Our Elders does not automatically read your calls, text messages, emails, contacts, photos, microphone, location, browsing history, bank accounts, passwords, or payment apps. You stay in control of what is checked." },
  { title: "Model-powered checks", body: "Some safety checks may send selected content to service providers that run scam-review, OCR, speech-to-text, hosting, security, analytics, or reliability services. Submitted content may be processed with technical information needed to return a result, such as IP address, request time, device information, and service logs. These checks are used for app functionality, not advertising or tracking." },
  { title: "Trusted contacts", body: "Trusted contact names and phone numbers are stored for user-directed contact actions, such as calling or texting a family member or caregiver. The app does not contact trusted people unless the user chooses that action." },
  { title: "How information is used", body: "We use information to provide scam-safety checks, explain risk signals, show next steps, save settings, maintain learning progress, prevent duplicate check requests, improve reliability, respond to support requests, and meet legal or safety obligations." },
  { title: "Sharing", body: "We do not sell personal information. We share information only with service providers needed to operate selected features, when required by law, to protect safety and security, or when a user chooses to share information with a trusted contact through their own phone or messaging app." },
  { title: "Limits of the service", body: "Shield Our Elders is a scam-awareness and safety-support tool. It is not a bank, law firm, credit bureau, police department, emergency service, or guaranteed fraud-detection system. Results may be incomplete or wrong, so urgent situations should be verified through official channels." },
  { title: "Contact", body: "For privacy questions, support, corrections, or deletion requests, email projectshieldourelders@gmail.com. We will review requests and respond as soon as reasonably possible." },
];

const PrivacyPage = () => (
  <main className="bg-[#f4f7fb] px-5 pb-24 pt-36 text-[#17345c] sm:px-8 lg:px-12 lg:pt-44">
    <div className="mx-auto max-w-[90rem]">
      <div className="grid gap-8 border-b border-[#a9b9cd] pb-12 lg:grid-cols-[0.42fr_1fr]">
        <p className="text-base text-[#51657f]">Effective July 28, 2026</p>
        <div>
          <h1 className="font-display text-6xl leading-none sm:text-7xl">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#51657f]">How Shield Our Elders handles information on the app and website.</p>
        </div>
      </div>
      <div className="ml-auto mt-4 max-w-4xl">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-[#c7d3e1] py-8 sm:grid sm:grid-cols-[0.72fr_1.28fr] sm:gap-10 sm:py-10">
            <h2 className="font-display text-3xl leading-tight">{section.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#51657f] sm:mt-0">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  </main>
);

export default PrivacyPage;
