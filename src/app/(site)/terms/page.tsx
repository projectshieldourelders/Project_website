import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const TermsPage = () => {
  return (
    <>
      <HeroSub title="Terms of Service" />
      <section className="lg:py-24 py-16 dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-muted dark:text-white/90">
              By using Shield Our Elders, you agree to use the app as a scam
              awareness and safety-support tool. The app may review messages,
              calls, links, QR codes, emails, payment requests, audio
              transcripts, and other information you submit, then provide risk
              indicators, explanations, and recommended next steps. Results are
              educational and may be incomplete or wrong. Shield Our Elders does
              not guarantee that every scam will be detected or that every safe
              message will be cleared.
            </p>
            <p className="text-lg leading-8 text-muted dark:text-white/90 mt-7">
              You are responsible for decisions you make after using the app.
              Do not rely on the app for emergency, legal, medical, banking,
              investment, tax, or law-enforcement advice. For urgent situations,
              call the official company number, your bank, local authorities, or
              a trusted person. You agree not to misuse the service, submit
              unlawful content, interfere with the app, or use it to harm
              others. We may update, suspend, or discontinue features as needed
              to keep the service reliable and safe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
