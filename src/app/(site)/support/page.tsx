import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Support information for Shield Our Elders.",
};

const supportItems = [
  {
    title: "App help",
    body: "For help using Shield Our Elders, questions about a feature, or trouble with the app, email us with your device type and a short description of what happened.",
  },
  {
    title: "Privacy help",
    body: "For privacy questions, corrections, or deletion requests, email us and include the email address you used to contact support.",
  },
  {
    title: "Scam emergency",
    body: "If money was sent, a link was clicked, or account information was shared, contact your bank, card issuer, official company support line, or local authorities right away. Shield Our Elders is not an emergency service.",
  },
];

const SupportPage = () => {
  return (
    <>
      <HeroSub title="Support" />
      <section className="bg-[#fffdf8] py-16 dark:bg-dark lg:py-24">
        <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                We can help
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-midnight_text dark:text-white md:text-5xl">
                Support for Shield Our Elders
              </h1>
              <p className="mt-6 text-lg leading-8 text-dustGray dark:text-white/85">
                The fastest way to reach us is email. We review messages and respond as soon as reasonably possible.
              </p>
              <Link
                href="mailto:projectshieldourelders@gmail.com"
                className="mt-8 inline-flex rounded-md bg-primary px-7 py-4 text-base font-semibold text-white transition hover:bg-darkprimary"
              >
                Email support
              </Link>
            </div>

            <div className="divide-y divide-[#d5dfd8] border-y border-[#d5dfd8] dark:divide-dark_border dark:border-dark_border">
              {supportItems.map((item) => (
                <div key={item.title} className="py-8">
                  <h2 className="text-2xl font-semibold text-midnight_text dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-dustGray dark:text-white/85">
                    {item.body}
                  </p>
                </div>
              ))}
              <div className="py-8">
                <h2 className="text-2xl font-semibold text-midnight_text dark:text-white">
                  Useful links
                </h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link href="/privacy" className="font-semibold text-primary hover:text-darkprimary">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="font-semibold text-primary hover:text-darkprimary">
                    Terms of Service
                  </Link>
                  <Link href="/" className="font-semibold text-primary hover:text-darkprimary">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
