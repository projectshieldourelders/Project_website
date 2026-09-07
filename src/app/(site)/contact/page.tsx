import { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/Site/InquiryForm";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shield Our Elders about workshops and community partnerships.",
};

const contactGroups = [
  [
    "Community hosts",
    "Senior communities, libraries, faith groups, and neighborhood organizations can ask about a workshop, resource table, or printed guides. A rough idea of the audience and room is enough to start.",
  ],
  [
    "Professional teams",
    "Banks, credit unions, care teams, and public-service staff can contact us about community education or a shared response for front-line teams who regularly hear scam concerns.",
  ],
  [
    "Families",
    "Relatives and caregivers can ask where to begin when someone they support is receiving suspicious calls or messages. We can point you toward the most relevant guide, although we cannot investigate an individual case.",
  ],
];

export default function ContactPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Ask about a workshop or partnership"
        intro="Tell us about your group, what people have been seeing, or the kind of support you have in mind."
        tone="paper"
        layout="centered"
      />

      <section className="bg-[#fff9e9] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-14 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Start with a few details
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#526661]">
                Tell us who you serve, your approximate group size, what people
                have been seeing, and what kind of help you have in mind. You do
                not need a final date, a budget, or a complete plan before
                writing to us.
              </p>
              <p className="mt-8 border-l-[6px] border-[#e9c96c] pl-5 text-lg font-bold">
                Please do not include passwords, account numbers, or other
                private financial information.
              </p>
            </div>
            <div className="doodle-card bg-white p-6 sm:p-9">
              <InquiryForm />
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display text-5xl sm:text-6xl">
              Who should reach out
            </h2>
            <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
              {contactGroups.map(([title, text]) => (
                <article key={title} className="pt-6">
                  <h3 className="font-display text-3xl">{title}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#526661]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183b36] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <div>
              <h2 className="font-display text-5xl leading-tight">
                Prefer regular email?
              </h2>
              <p className="mt-6 text-xl leading-8 text-[#e3efec]">
                Write directly to us if the form is inconvenient. We read the
                note, ask any missing questions, and suggest a practical next
                step. There is no mailing list and no automated sales sequence.
              </p>
              <Link
                href="mailto:projectshieldourelders@gmail.com"
                className="mt-7 block break-all text-xl font-bold text-[#e9c96c] underline decoration-2 underline-offset-4"
              >
                projectshieldourelders@gmail.com
              </Link>
              <p className="mt-5 text-lg text-[#e3efec]">
                Brevard County, Florida
              </p>
            </div>
            <div>
              <h2 className="font-display text-5xl leading-tight">
                App help and urgent situations
              </h2>
              <div className="mt-6 space-y-6 text-xl leading-8 text-[#e3efec]">
                <p>
                  For technical problems, privacy requests, or help
                  understanding a feature, use the app support page so your
                  question reaches the right place.
                </p>
                <p>
                  If money was sent or account access may be at risk, do not
                  wait for an email reply. Call the bank or card issuer using
                  the number on the card or statement, then follow the recovery
                  guide.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/support"
                  className="doodle-button inline-flex bg-white px-7 py-4 font-bold text-[#183b36]"
                >
                  App support
                </Link>
                <Link
                  href="/resources#recovery"
                  className="doodle-button inline-flex bg-[#e9c96c] px-7 py-4 font-bold text-[#183b36]"
                >
                  Recovery guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
