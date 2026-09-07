import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";
import { assetPath } from "@/utils/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Shield Our Elders teaches practical scam-safety skills in Brevard County.",
};

const principles = [
  [
    "No blame",
    "Being targeted does not mean someone was careless. Scam calls are built to catch people during ordinary moments, then replace time and context with pressure. We keep the conversation focused on what happened and what can be done next.",
  ],
  [
    "Practice first",
    "People remember a decision they have rehearsed better than a long warning. We spend less time lecturing and more time working through realistic calls, messages, links, and payment requests together.",
  ],
  [
    "Bring someone in",
    "A family member, neighbor, caregiver, or staff member can help check a story when it is hard to think clearly. The workshop makes asking for that second opinion feel normal, not embarrassing.",
  ],
];

const audiences = [
  [
    "At home",
    "Older adults living independently often make these decisions alone, even when family or friends would gladly help. We help households agree on who to call, what source to trust, and how to pause without feeling rude.",
  ],
  [
    "In community spaces",
    "Residents, libraries, senior centers, and faith groups can learn from one another in a familiar room. Local questions also help us replace generic warnings with examples the group recognizes.",
  ],
  [
    "At work",
    "Care teams, financial institutions, and public-service staff regularly hear scam concerns from the people they serve. A shared response makes it easier to offer help without blame or panic.",
  ],
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Why this work matters"
        intro="A scam warning is easier to remember when it is tied to a practical response people have already practiced together."
        tone="mist"
        layout="centered"
      />

      <section className="bg-[#faf7ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-[clamp(3rem,5vw,5.4rem)] leading-[1.01]">
              A warning is easy to forget when the phone is ringing
            </h2>
            <div className="space-y-7 text-xl leading-8 text-[#526661]">
              <p>
                Most people know they should watch for scams. That does not make
                it easy to think clearly when a caller says a loved one is in
                trouble, an account is about to close, or a payment must happen
                before the conversation ends.
              </p>
              <p>
                We teach one response: pause, verify, and tell someone. Then we
                practice it with situations people may actually receive, giving
                the room enough time to notice how pressure changes a decision.
              </p>
              <Link
                href="/program"
                className="doodle-button inline-flex bg-[#2f756b] px-7 py-4 font-extrabold text-white"
              >
                Inside the workshop
              </Link>
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display max-w-3xl text-5xl leading-tight sm:text-6xl">
              How we teach
            </h2>
            <div className="mt-12 flex flex-col gap-10 md:flex-row md:gap-14 md:[&>*]:flex-1">
              {principles.map(([title, text]) => (
                <article key={title} className="py-4">
                  <h3 className="font-display text-3xl">{title}</h3>
                  <p className="mt-4 max-w-sm text-lg leading-8 text-[#526661]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="audiences"
        className="scroll-mt-28 bg-[#183b36] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <figure
              data-reveal
              className="editorial-photo editorial-photo--gold"
            >
              <Image
                src={assetPath("/images/photos/presenters-closing.jpg")}
                alt="Two Shield Our Elders presenters preparing the workshop's closing discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="editorial-photo__image object-cover"
              />
              <figcaption className="editorial-photo__caption">
                The closing conversation: pause, verify, protect.
              </figcaption>
            </figure>
            <div>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                Made for the room, not a slide deck
              </h2>
              <div className="mt-7 space-y-6 text-xl leading-8 text-[#e3efec]">
                <p>
                  Participants can ask questions, repeat a step, write things
                  down, or bring a trusted person. We leave room for
                  conversation because that is often where the useful learning
                  happens.
                </p>
                <p>
                  Nobody is asked to confess a mistake or prove what they know.
                  The workshop is a place to try a response, hear how someone
                  else would handle it, and leave with a plan that feels
                  realistic.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display max-w-4xl text-5xl leading-tight sm:text-6xl">
              Who joins us
            </h2>
            <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
              {audiences.map(([title, text]) => (
                <article key={title} className="pt-6">
                  <h3 className="font-display text-3xl text-[#e9c96c]">
                    {title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-[#e3efec]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-10 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <h2 className="font-display text-5xl leading-tight sm:text-7xl">
            Rooted in Brevard County
          </h2>
          <div className="space-y-6 text-xl leading-8 text-[#526661]">
            <p>
              Local groups tell us which scams are showing up and how people are
              talking about them. That local context helps us choose useful
              examples without turning the workshop into a stream of alarming
              news.
            </p>
            <p>
              We are building the program alongside the communities that host
              it. Their questions shape the handouts, the pace, and the
              situations we practice during future visits.
            </p>
            <Link
              href="/partners"
              className="doodle-button inline-flex bg-white px-7 py-4 font-extrabold text-[#183b36]"
            >
              Talk with our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
