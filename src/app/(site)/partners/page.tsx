import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "Partners",
  description: "Host or support a scam-safety workshop in Brevard County.",
};

const partners = [
  [
    "Senior living",
    "A session can be built for residents, relatives, staff, or a mixed room. We coordinate with the host so examples, print size, seating, and pacing fit the people attending.",
  ],
  [
    "Banks and credit unions",
    "Front-line teams can help customers pause before a rushed transfer or account takeover. A workshop gives staff and community members the same vocabulary for checking an urgent request.",
  ],
  [
    "Care teams",
    "Caregivers often hear about a suspicious call after it has already created fear. Shared language helps staff and families respond calmly, preserve dignity, and verify the story together.",
  ],
  [
    "Libraries and community groups",
    "A familiar, easy-to-reach place makes it simpler for people to attend and ask questions. We bring the lesson and printable materials while the host brings local knowledge and trust.",
  ],
];

const hostDetails = [
  [
    "The room",
    "We need chairs, a screen or clear wall, and an entrance participants can use comfortably. Before the visit, we can talk through sound, lighting, seating, and mobility needs.",
  ],
  [
    "The people",
    "One arrival contact and a rough group size are enough to plan the session. Nobody has to register for an account or disclose whether they have personally lost money.",
  ],
  [
    "The context",
    "Tell us which scams people have mentioned lately and which topics feel most useful. We will choose examples that fit the room without using anyone’s private story as a lesson.",
  ],
];

const sponsorship = [
  [
    "Guides",
    "Large-print pages give participants something useful to keep beside the phone after the workshop ends. Funding helps us print readable copies rather than asking everyone to use a small screen.",
  ],
  [
    "Contact cards",
    "A simple card creates one dependable place for trusted names, phone numbers, and a family verification phrase. Participants fill it in privately and take it home.",
  ],
  [
    "Practice materials",
    "Realistic examples make the session feel connected to ordinary life. Support helps us update those materials and return to the community for another round of practice.",
  ],
];

export default function PartnersPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Host a workshop in your community"
        intro="We work with local groups that want to give older adults and families time to talk through scam situations before a real call arrives."
        tone="mist"
        layout="centered"
      />

      <section className="bg-[#fff6f2] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              A partnership can start small
            </h2>
            <div className="space-y-6 text-xl leading-8 text-[#526661]">
              <p>
                You do not need a scam-prevention department or a finished event
                plan. A meeting room, an introduction, local context, or help
                printing handouts can be enough to begin.
              </p>
              <p>
                We work out the format with you, including who the session is
                for, what the group has been seeing, and how the room can be
                made comfortable. The goal is a useful visit, not a complicated
                partnership package.
              </p>
              <Link
                href="/contact"
                className="doodle-button inline-flex bg-[#2f756b] px-7 py-4 font-bold text-white"
              >
                Tell us about your group
              </Link>
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display text-5xl sm:text-6xl">
              Who we work with
            </h2>
            <div className="mt-12 flex flex-col gap-10">
              {partners.map(([title, text]) => (
                <article
                  key={title}
                  className="flex flex-col gap-3 py-3 sm:flex-row sm:gap-16"
                >
                  <h3 className="font-display text-3xl leading-tight sm:w-2/5">
                    {title}
                  </h3>
                  <p className="max-w-2xl flex-1 text-lg leading-8 text-[#526661]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-10 pt-14 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              How organizations help
            </h2>
            <p className="text-xl leading-8 text-[#526661]">
              Some partners host a room and invite the community. Others cover
              large-print guides, wallet cards, and the materials used during a
              return visit. A simple introduction to a senior community,
              caregiver group, library, or local expert can be just as valuable.
              We can begin with whichever kind of support is realistic for your
              organization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#183b36] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              What makes a visit possible
            </h2>
            <p className="max-w-2xl text-xl leading-8 text-[#e3efec]">
              We handle the lesson and materials. The host helps us understand
              the place and the people before we arrive, while sponsors help
              make the printed materials and return visits possible.
            </p>
          </div>
          <dl className="mt-12 flex flex-col gap-9 lg:flex-row lg:[&>*]:flex-1">
            {hostDetails.map(([term, detail]) => (
              <div key={term} className="pt-6">
                <dt className="font-display text-3xl text-[#e9c96c]">{term}</dt>
                <dd className="mt-4 text-lg leading-8 text-[#e3efec]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-20 pt-14">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Where sponsorship goes
            </h2>
            <dl className="mt-12 flex flex-col gap-9 lg:flex-row lg:[&>*]:flex-1">
              {sponsorship.map(([term, detail]) => (
                <div key={term} className="pt-6">
                  <dt className="font-display text-3xl text-[#e9c96c]">
                    {term}
                  </dt>
                  <dd className="mt-4 text-lg leading-8 text-[#e3efec]">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#e9c96c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-10 lg:flex-row lg:items-end lg:gap-24 lg:[&>*]:flex-1">
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Not sure where your organization fits?
          </h2>
          <div>
            <p className="text-xl leading-8">
              Send a short note about the people you serve and the kind of
              support you can offer. We can usually tell within one conversation
              whether a workshop, a resource table, a sponsored print run, or an
              introduction makes sense.
            </p>
            <Link
              href="/contact"
              className="doodle-button mt-8 inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
