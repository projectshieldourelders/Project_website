import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "Scam Examples",
  description:
    "Practice spotting suspicious calls, messages, links, and payment requests.",
};

const signals = [
  [
    "Pressure",
    "The sender wants an answer before you have time to think or speak with anyone else. Urgency, fear, and secrecy matter more than whether the message looks polished.",
  ],
  [
    "Access",
    "Requests for passwords, verification codes, remote control, or private details can give another person control of an account. A legitimate employee should not need you to read back a security code.",
  ],
  [
    "Payment",
    "The sender chooses the payment method and makes an ordinary purchase feel urgent. Gift cards, cryptocurrency, wire transfers, and cash are difficult to recover once they have been sent.",
  ],
];

export default function ExamplesPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Recognize the pressure before you respond"
        intro="These fictional examples show the tactics that turn an ordinary message or call into a rushed decision."
        tone="paper"
        layout="centered"
      />

      <section className="bg-[#f8f5fc] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <div>
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Look for pressure, not perfect spelling
            </h2>
            <p className="mt-6 text-xl leading-8 text-[#526661]">
              A polished message can still be a scam. Start with what the sender
              wants you to do.
            </p>
          </div>
          <dl className="space-y-8">
            {signals.map(([term, detail]) => (
              <div
                key={term}
                className="flex flex-col gap-2 sm:flex-row sm:gap-8 sm:[&>*]:flex-1"
              >
                <dt className="font-display text-2xl text-[#2f756b]">{term}</dt>
                <dd className="text-xl leading-8">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="calls"
        className="scroll-mt-28 bg-[#e9c96c] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-[86rem]">
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Situations worth practicing
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-8">
            The words change from one scam to another, but the safer response is
            usually familiar: end the contact, find an independent source, and
            bring in another person before taking action.
          </p>
          <div className="mt-14 space-y-16">
            <article className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:[&>*]:flex-1">
              <div className="doodle-card bg-white p-7 sm:p-9">
                <p className="font-bold">Unknown caller</p>
                <blockquote className="font-display mt-7 text-3xl leading-tight">
                  “Your grandson has been arrested. Send bail money today and do
                  not tell anyone.”
                </blockquote>
              </div>
              <div>
                <h3 className="font-display text-4xl">A family emergency</h3>
                <p className="mt-5 text-xl leading-8">
                  The caller combines a loved one, an urgent deadline, immediate
                  payment, and secrecy. Hang up and call the family member or
                  another relative directly. A real emergency will still exist
                  after that independent call.
                </p>
              </div>
            </article>
            <article
              id="messages"
              className="scroll-mt-28 flex flex-col gap-10 pt-14 lg:flex-row lg:gap-20 lg:[&>*]:flex-1"
            >
              <div>
                <h3 className="font-display text-4xl">A package text</h3>
                <p className="mt-5 text-xl leading-8">
                  The message says a delivery cannot be completed until a small
                  fee is paid through its link. Do not use the supplied link.
                  Open the carrier’s official app or type an address you already
                  know, then check the tracking information there.
                </p>
              </div>
              <div className="doodle-card bg-white p-7 sm:p-9">
                <p className="font-bold">New message</p>
                <blockquote className="font-display mt-7 text-3xl leading-tight">
                  “Your package is on hold. Confirm your address and pay 30¢
                  now.”
                </blockquote>
              </div>
            </article>
            <article className="flex flex-col gap-10 pt-14 lg:flex-row lg:gap-20 lg:[&>*]:flex-1">
              <div>
                <h3 className="font-display text-4xl">A bank alert</h3>
                <p className="mt-5 text-xl leading-8">
                  Knowing the bank’s name does not prove who sent the message.
                  Never read back a verification code or move money to a “safe”
                  account. Call the number on the back of the card and explain
                  what the message requested.
                </p>
              </div>
              <blockquote className="border-l-[5px] border-[#183b36] pl-6 font-display text-3xl leading-tight">
                “Reply with the six-digit code we just sent so we can stop the
                transfer.”
              </blockquote>
            </article>
            <article className="flex flex-col gap-10 pt-14 lg:flex-row lg:gap-20 lg:[&>*]:flex-1">
              <h3 className="font-display text-4xl">
                A voice that sounds familiar
              </h3>
              <div className="space-y-5 text-xl leading-8">
                <p>
                  A caller may sound like family and still be impersonating
                  them. Voice cloning and ordinary acting can both make a rushed
                  story feel personal and believable.
                </p>
                <p>
                  Ask for a private family phrase chosen in advance, then end
                  the call and contact the person through a number you already
                  know. The phrase helps, but the independent callback is still
                  the strongest check.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#d4c9e8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <div>
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Before any unusual payment
            </h2>
            <div className="mt-6 space-y-5 text-xl leading-8">
              <p>
                Stop when someone chooses the payment method for you, stays on
                the phone while you pay, or tells you to hide the real reason
                from a cashier or bank employee.
              </p>
              <p>
                Gift cards, cryptocurrency, wire transfers, cash couriers,
                payment apps, and precious metals are common requests because
                they can be difficult to reverse. The payment method does not
                prove a scam by itself, but pressure and secrecy are reasons to
                stop and verify.
              </p>
            </div>
          </div>
          <div className="border-l-[5px] border-[#183b36] pl-7">
            <h3 className="font-display text-4xl">
              Practice without the pressure
            </h3>
            <p className="mt-5 text-xl leading-8">
              A group workshop gives people time to discuss these situations
              before a real caller is waiting for an answer. Participants can
              compare responses, ask questions, and leave with language they are
              comfortable using.
            </p>
            <Link
              href="/program"
              className="doodle-button mt-8 inline-flex min-h-14 w-fit items-center bg-white px-7 font-bold"
            >
              See the workshop
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
