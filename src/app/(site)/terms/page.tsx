import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Shield Our Elders.",
};

const sections = [
  {
    title: "Use of the service",
    body: "Shield Our Elders provides scam-awareness tools, educational lessons, practice examples, and safety prompts. You may use the app to check information you choose to submit, including messages, links, QR codes, phone numbers, payment requests, screenshots, voicemail transcripts, and related notes.",
  },
  {
    title: "No guaranteed detection",
    body: "The app can miss scams, incorrectly flag safe content, or provide incomplete explanations. Results are educational and should not be treated as a guarantee that something is safe or unsafe.",
  },
  {
    title: "Not professional advice",
    body: "Shield Our Elders is not a bank, law firm, credit bureau, tax advisor, medical provider, police department, emergency service, or investment advisor. For urgent or high-risk situations, contact your bank, card issuer, official company support line, local authorities, or a trusted caregiver.",
  },
  {
    title: "Your responsibilities",
    body: "You are responsible for the information you submit and the decisions you make after using the app. Do not submit unlawful content, use the service to harm others, attempt to interfere with the app, or rely on the app as your only safety step.",
  },
  {
    title: "Sensitive information",
    body: "Avoid submitting passwords, full account numbers, Social Security numbers, complete card numbers, medical records, or other sensitive information unless it is necessary to understand a safety concern. The app is built to reduce risk, not to store sensitive records.",
  },
  {
    title: "Availability and updates",
    body: "Features may change, pause, or stop working because of maintenance, service-provider outages, platform limits, or safety improvements. We may update these terms as the app changes.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to projectshieldourelders@gmail.com.",
  },
];

const TermsPage = () => (
  <main className="bg-[#f7f8f5] px-5 pb-24 pt-36 text-[#183b36] sm:px-8 lg:px-12 lg:pt-44">
    <div className="mx-auto max-w-[90rem]">
      <div className="flex flex-col gap-8 border-b border-[#a9b9cd] pb-12 lg:flex-row lg:[&>*]:flex-1">
        <p className="text-base text-[#526661]">Effective July 28, 2026</p>
        <div>
          <h1 className="font-display text-6xl leading-none sm:text-7xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#526661]">
            By using Shield Our Elders, you agree to these terms.
          </p>
        </div>
      </div>
      <div className="ml-auto mt-4 max-w-4xl">
        {sections.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-5 border-b border-[#c7d3e1] py-8 sm:flex-row sm:gap-10 sm:py-10 sm:[&>*]:flex-1"
          >
            <h2 className="font-display text-3xl leading-tight">
              {section.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#526661] sm:mt-0">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  </main>
);

export default TermsPage;
