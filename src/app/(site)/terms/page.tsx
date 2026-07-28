import HeroSub from "@/components/SharedComponent/HeroSub";
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

const TermsPage = () => {
  return (
    <>
      <HeroSub title="Terms of Service" />
      <section className="bg-[#fffdf8] py-16 dark:bg-dark lg:py-24">
        <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Effective July 28, 2026
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-midnight_text dark:text-white md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-dustGray dark:text-white/85">
              By using Shield Our Elders, you agree to these terms.
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

export default TermsPage;
