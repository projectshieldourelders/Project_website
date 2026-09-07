import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import WorkshopDeck from "@/components/Site/WorkshopDeck";

export const metadata: Metadata = {
  title: "Program",
  description:
    "See what happens during a Shield Our Elders scam-safety workshop.",
};

const steps = [
  [
    "Before we visit",
    "We speak with the host about the group, the room, accessibility needs, and the scams people have mentioned recently. That conversation keeps the workshop relevant without asking anyone to share a private experience in public.",
  ],
  [
    "During the session",
    "We work through suspicious calls, messages, links, and payment requests at a comfortable pace. Participants can ask questions, compare possible responses, and practice verifying a story through a source they already trust.",
  ],
  [
    "Afterward",
    "A return visit gives people another chance to use the routine and revisit anything that felt unclear. Everyone keeps large-print guides and a trusted-contact card so the lesson remains useful after the room is packed away.",
  ],
];

const topicGroups = [
  [
    "Money and accounts",
    "We compare bank alerts, investment pitches, gift cards, cryptocurrency, and wire requests. The discussion centers on how to contact the real institution without using the number or link supplied by the sender.",
  ],
  [
    "Family and trust",
    "Grandparent emergencies, romance scams, and callers asking for secrecy can be emotionally convincing. Participants practice ending the contact and reaching the person involved through a familiar number.",
  ],
  [
    "Everyday messages",
    "Delivery, toll, Medicare, tax, and remote-access requests often imitate routine business. We look at the request itself and ask why the sender is trying to control the next action.",
  ],
];

const workshopAccess = [
  [
    "See it",
    "Examples are projected at a large size and repeated in high-contrast printed handouts. Important details are marked with words and shapes, so color is never the only clue.",
  ],
  [
    "Hear it",
    "Key details are read aloud, unfamiliar terms are explained, and questions can be repeated. Participants do not need to follow a fast presentation or read from a distant screen.",
  ],
  [
    "Take your time",
    "Activities can be completed while seated, the room can pause whenever needed, and nobody is required to describe a personal scam experience in front of the group.",
  ],
];

export default function ProgramPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="What happens in a workshop"
        intro="A guided conversation about the calls, texts, websites, and payment requests people see in ordinary life."
        tone="paper"
        layout="centered"
      />

      <section className="bg-[#fff9e9] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display max-w-3xl text-[clamp(3.1rem,5.7vw,6rem)] leading-[0.98]">
              How a visit works
            </h2>
            <div className="space-y-8">
              {steps.map(([title, text]) => (
                <article
                  key={title}
                  className="flex flex-col gap-4 py-2 sm:flex-row sm:items-start sm:[&>*]:flex-1"
                >
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="text-lg leading-8 text-[#526661]">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display max-w-4xl text-5xl leading-tight sm:text-6xl">
              Examples drawn from ordinary life
            </h2>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-[#526661]">
              The workshop uses situations people are likely to recognize, then
              slows the conversation down enough to examine what the sender
              wants and where an independent check can begin.
            </p>
            <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
              {topicGroups.map(([title, text]) => (
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

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Practice one decision at a time
          </h2>
          <p className="mt-5 max-w-4xl text-xl leading-8 text-[#526661]">
            Each example begins with a question rather than an answer. Use the
            arrows, swipe, or press the left and right arrow keys to move
            through the same conversation participants have in the room.
          </p>
          <WorkshopDeck />
        </div>
      </section>

      <section className="bg-[#e3efec] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <h2 className="font-display max-w-4xl text-5xl leading-tight sm:text-6xl">
            Built to be easier to follow
          </h2>
          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
            {workshopAccess.map(([title, text]) => (
              <article key={title}>
                <h3 className="font-display text-3xl">{title}</h3>
                <p className="mt-4 border-l-[4px] border-[#2f756b] pl-5 text-xl leading-8 text-[#526661]">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-20 flex flex-col gap-10 pt-14 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              What goes home
            </h2>
            <div>
              <p className="text-xl leading-8 text-[#526661]">
                Participants keep a large-print guide, a warning-sign checklist,
                a trusted-contact card, and space to write a family verification
                phrase. The materials are designed to sit beside the phone or on
                a refrigerator door, where they can be found during a stressful
                moment.
              </p>
              <p className="mt-6 text-xl leading-8 text-[#526661]">
                Tell us who is attending, what the group has been seeing, and
                any access needs we should plan around. We will suggest a
                practical format for the room.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/resources"
                  className="doodle-button inline-flex bg-white px-7 py-4 font-extrabold text-[#183b36]"
                >
                  See free resources
                </Link>
                <Link
                  href="/contact"
                  className="doodle-button inline-flex bg-[#2f756b] px-7 py-4 font-extrabold text-white"
                >
                  Request a workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
