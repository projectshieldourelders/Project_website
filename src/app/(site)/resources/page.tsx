import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import PrintButton from "@/components/Common/PrintButton";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = { title: "Resources", description: "Plain-language scam safety and recovery resources for older adults and families." };

const reports = [
  ["Report a scam", "Federal Trade Commission", "https://reportfraud.ftc.gov/"],
  ["Create an identity-theft recovery plan", "Federal Trade Commission", "https://www.identitytheft.gov/"],
  ["Report internet crime", "FBI Internet Crime Complaint Center", "https://www.ic3.gov/"],
  ["Report a Social Security scam", "Social Security Administration", "https://oig.ssa.gov/report/"],
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
    description: "A printable page for important names, numbers, and a family phrase.",
    file: "/guides/trusted-contact-plan.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#f4f7fb] text-[#17345c]">
      <PageHero title="Help, without the runaround" intro="Start with the situation in front of you. Each guide gives you a short next step." image="/images/doodles/simple-resource-guide.svg" imageAlt="A checklist, phone, and safety shield" />

      <section id="downloads" className="resource-library scroll-mt-24 border-b-[3px] border-[#183b36] bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Download and print</h2>
            <p className="max-w-2xl text-xl leading-8 text-[#526661] lg:justify-self-end">Four one-page guides made for a refrigerator door, community table, or folder beside the phone.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {downloads.map((guide) => (
              <a key={guide.file} href={assetPath(guide.file)} download className="resource-download">
                <span className="resource-download__type" aria-hidden="true">PDF</span>
                <span>
                  <strong className="font-display block text-2xl">{guide.title}</strong>
                  <span className="mt-2 block text-lg leading-7 text-[#526661]">{guide.description}</span>
                  <span className="mt-4 block font-bold text-[#2f756b]">Download one-page guide</span>
                </span>
                <span className="resource-download__arrow" aria-hidden="true">↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-[#17345c] bg-[#f3b83f] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">If the call or message is happening now</h2><ol className="mt-10 grid gap-5 lg:grid-cols-5">{["Stop replying", "Do not click", "Do not pay", "Call someone you trust", "Verify through an official number"].map((item, index) => <li key={item} className="border-l-[3px] border-[#17345c] pl-5 text-xl font-bold"><span className="block font-display text-3xl">{index + 1}</span><span className="mt-2 block">{item}</span></li>)}</ol></div></section>

      <section id="recovery" className="scroll-mt-28 border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><h2 className="font-display text-5xl leading-tight sm:text-6xl">Money was sent</h2><p className="mt-6 text-xl leading-8 text-[#51657f]">Move quickly, but use official contact information.</p></div><ol className="divide-y-2 divide-[#17345c] border-y-2 border-[#17345c]">{[["Call the bank or payment company", "Ask whether the transfer can be stopped or reversed."], ["Secure the account", "Change the password and turn on two-step verification."], ["Save the evidence", "Keep receipts, messages, phone numbers, and dates."], ["Make a report", "Use the official reporting links below."], ["Watch for recovery scams", "No legitimate helper can guarantee your money back for an upfront fee."]].map(([title, text], index) => <li key={title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]"><span className="font-display text-2xl text-[#3977f6]">0{index + 1}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-lg leading-7 text-[#51657f]">{text}</p></div></li>)}</ol></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#dce9f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[86rem]"><h2 className="font-display text-5xl leading-tight sm:text-6xl">Personal information was shared</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{[["Passwords", "Change reused passwords, starting with email and financial accounts."], ["Card or bank details", "Call the issuer and ask about replacement cards or account protections."], ["Social Security number", "Use IdentityTheft.gov to build a recovery plan and consider a credit freeze."]].map(([title, text], index) => <article key={title} className={`doodle-card min-h-64 p-7 ${index === 0 ? "bg-white" : index === 1 ? "bg-[#b7a7e8]" : "bg-[#f47b6a]"}`}><h3 className="font-display text-3xl">{title}</h3><p className="mt-5 text-lg leading-7">{text}</p></article>)}</div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#17345c] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[86rem]"><div className="grid gap-8 lg:grid-cols-2"><h2 className="font-display text-5xl leading-tight sm:text-6xl">Official places to report</h2><p className="text-xl leading-8 text-[#dce9f7]">These links leave our website and go directly to U.S. government services.</p></div><div className="mt-12 divide-y border-y border-white/50">{reports.map(([title, source, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="grid min-h-28 gap-2 py-6 text-white sm:grid-cols-[0.8fr_1fr_auto] sm:items-center"><strong className="font-display text-2xl">{title}</strong><span className="text-[#dce9f7]">{source}</span><span className="font-bold text-[#f3b83f]">Open official site ↗</span></a>)}</div></div></section>

      <section className="border-b-[3px] border-[#17345c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-2 lg:gap-24"><div><h2 className="font-display text-5xl leading-tight">Build a trusted-contact plan</h2><p className="mt-6 text-xl leading-8 text-[#51657f]">Choose one or two people you can call before sending money or sharing a code. Write their numbers somewhere you can reach without opening a suspicious message.</p></div><div className="doodle-card bg-white p-7 sm:p-9"><p className="font-display text-3xl">My trusted contacts</p><div className="mt-8 space-y-8 text-xl"><p className="border-b-2 border-[#17345c] pb-3">Name and phone number</p><p className="border-b-2 border-[#17345c] pb-3">Name and phone number</p><p className="border-b-2 border-[#17345c] pb-3">Family verification phrase</p></div></div></div></section>

      <section className="border-b-[3px] border-[#17345c] bg-[#b7a7e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="font-display text-4xl sm:text-5xl">Keep a paper copy nearby</h2><p className="mt-4 max-w-3xl text-xl leading-8">Printing removes the need to find this page during a stressful call.</p></div><PrintButton /></div></section>

      <section className="bg-[#f47b6a] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="font-display max-w-4xl text-4xl leading-tight sm:text-6xl">Practice before the next call arrives</h2><Link href="/examples" className="doodle-button inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold">Try scam examples</Link></div></section>
    </main>
  );
}
