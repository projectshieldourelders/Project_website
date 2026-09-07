import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import PrintButton from "@/components/Common/PrintButton";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-language scam safety and recovery resources for older adults and families.",
};

const reports = [
  ["Report a scam", "Federal Trade Commission", "https://reportfraud.ftc.gov/"],
  [
    "Create an identity-theft recovery plan",
    "Federal Trade Commission",
    "https://www.identitytheft.gov/",
  ],
  [
    "Report internet crime",
    "FBI Internet Crime Complaint Center",
    "https://www.ic3.gov/",
  ],
  [
    "Report a Social Security scam",
    "Social Security Administration",
    "https://oig.ssa.gov/report/",
  ],
];

const downloads = [
  {
    title: "Suspicious Call Checklist",
    description: "Five large-print steps to keep beside the phone.",
    file: "/guides/suspicious-call-checklist.pdf",
  },
  {
    title: "Suspicious Message Checklist",
    description: "A quick check before replying, clicking, or downloading.",
    file: "/guides/suspicious-message-checklist.pdf",
  },
  {
    title: "After a Scam: What to Do Next",
    description: "A calm recovery checklist for payments and account security.",
    file: "/guides/after-a-scam-recovery-guide.pdf",
  },
  {
    title: "My Trusted-Contact Plan",
    description:
      "A printable page for important names, numbers, and a family phrase.",
    file: "/guides/trusted-contact-plan.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Guides for a suspicious call, text, or payment"
        intro="Printable, plain-language steps for checking a concern and responding after money or information has been shared."
        tone="mist"
        layout="centered"
      />

      <section
        id="downloads"
        className="resource-library scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Download and print
            </h2>
            <p className="max-w-2xl text-xl leading-8 text-[#526661] lg:justify-self-end">
              Four one-page guides made for a refrigerator door, community
              table, or folder beside the phone.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-5">
            {downloads.map((guide) => (
              <a
                key={guide.file}
                href={assetPath(guide.file)}
                download
                className="resource-download"
              >
                <span className="resource-download__type" aria-hidden="true">
                  PDF
                </span>
                <span className="resource-download__copy">
                  <strong className="font-display block text-2xl">
                    {guide.title}
                  </strong>
                  <span className="resource-download__description mt-2 block text-lg leading-7">
                    {guide.description}
                  </span>
                  <span className="resource-download__action mt-4 block font-bold">
                    Download one-page guide
                  </span>
                </span>
                <span className="resource-download__arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="urgent"
        className="scroll-mt-28 bg-[#e9c96c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:[&>*]:flex-1">
            <div>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                If it is happening right now
              </h2>
              <p className="font-display mt-7 text-3xl">End the contact.</p>
            </div>
            <div className="border-l-[4px] border-[#183b36] pl-6 sm:pl-8">
              <p className="text-2xl font-bold leading-9">
                Hang up or stop replying. Do not click the link, share a code,
                or send money while the other person is directing the
                conversation.
              </p>
              <p className="mt-5 text-xl leading-8">
                Call someone you trust and explain what was requested. When you
                are ready to check the story, contact the company through its
                official app, a statement, the back of your card, or a website
                address you type yourself.
              </p>
            </div>
          </div>
          <div
            id="recovery"
            className="scroll-mt-28 mt-20 flex flex-col gap-12 pt-14 lg:flex-row lg:gap-24 lg:[&>*]:flex-1"
          >
            <div>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                If money was sent
              </h2>
              <p className="mt-6 text-xl leading-8">
                Move quickly, but do not let a new caller take control of the
                recovery. Use contact information from your card, statement, or
                the company’s official website.
              </p>
            </div>
            <div className="space-y-7 text-xl leading-8">
              <p>
                <strong>Call the bank or payment company first.</strong> Ask
                whether the transfer can be stopped, reversed, or marked as
                fraud. Then change the affected passwords, starting with email
                and financial accounts, and turn on two-step verification where
                it is available.
              </p>
              <p>
                <strong>Save the evidence.</strong> Keep receipts, messages,
                phone numbers, dates, and screenshots before deleting anything.
                Those records can help the bank and any official report you
                decide to make.
              </p>
              <p>
                <strong>Be careful with recovery offers.</strong> A person who
                promises to recover everything for an upfront fee may be running
                another scam. Do not give remote access or make another payment
                to someone who contacts you unexpectedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e3efec] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              When private information was shared
            </h2>
            <div className="space-y-6 text-xl leading-8 text-[#526661]">
              <p>
                <strong>Passwords:</strong> change any reused password, starting
                with email and financial accounts. A new password should be
                unique, and two-step verification should be turned on when the
                service offers it.
              </p>
              <p>
                <strong>Card or bank details:</strong> call the issuer and
                explain exactly what was shared. Ask whether the card or account
                number should be replaced and what activity needs to be watched.
              </p>
              <p>
                <strong>A Social Security number:</strong> use IdentityTheft.gov
                to build a recovery plan and learn how a credit freeze works
                before paying any company for help.
              </p>
            </div>
          </div>
          <div className="mt-20 pt-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:[&>*]:flex-1">
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                Official places to report
              </h2>
              <p className="text-xl leading-8 text-[#526661]">
                These links leave our website and go directly to U.S. government
                services. Choose the one that matches what happened; you do not
                need to submit every form.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              {reports.map(([title, source, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="resource-link flex min-h-28 flex-col gap-2 bg-white/60 px-6 py-6 sm:flex-row sm:items-center sm:gap-8 sm:[&>*:nth-child(2)]:flex-1"
                >
                  <strong className="font-display text-2xl">{title}</strong>
                  <span className="text-[#526661]">{source}</span>
                  <span className="font-bold text-[#2f756b]">
                    Visit the official site
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d4c9e8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <div>
            <h2 className="font-display text-5xl leading-tight">
              Make the plan easy to find
            </h2>
            <div className="mt-6 space-y-6 text-xl leading-8">
              <p>
                Choose one or two people you can call before sending money or
                sharing a code. Write their numbers somewhere you can reach
                without reopening a suspicious message, and agree on a private
                family phrase that an unexpected caller would not know.
              </p>
              <p>
                A printed copy beside the phone removes the need to search for
                this page during a stressful call. You can also practice with
                the examples now, while there is no pressure to make a real
                decision.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrintButton />
              <Link
                href="/examples"
                className="doodle-button inline-flex min-h-14 items-center bg-white px-7 font-bold"
              >
                Try scam examples
              </Link>
            </div>
          </div>
          <div className="doodle-card bg-white p-7 sm:p-9">
            <p className="font-display text-3xl">My trusted contacts</p>
            <div className="mt-8 space-y-8 text-xl">
              <p className="border-b-2 border-[#183b36] pb-3">
                Name and phone number
              </p>
              <p className="border-b-2 border-[#183b36] pb-3">
                Name and phone number
              </p>
              <p className="border-b-2 border-[#183b36] pb-3">
                Family verification phrase
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
