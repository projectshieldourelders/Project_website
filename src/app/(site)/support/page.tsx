import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "App Support",
  description:
    "Get help with the Shield Our Elders app or send a privacy request.",
};

export default function SupportPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Help with the Shield Our Elders app"
        intro="Describe what happened and the device you are using. We will help you find the next step."
        tone="ink"
        layout="centered"
      />

      <section className="bg-[#f2f6f5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <div>
              <h2 className="font-display text-5xl leading-tight">
                Email is the quickest way to reach us
              </h2>
              <p className="mt-6 text-xl leading-8 text-[#526661]">
                Describe the device you are using, the screen or feature you
                opened, what you expected, and what happened instead. Include
                the app version if it is visible, and attach a screenshot only
                after removing private messages, account details, and phone
                numbers.
              </p>
              <Link
                href="mailto:projectshieldourelders@gmail.com?subject=App%20support"
                className="doodle-button mt-8 inline-flex bg-[#2f756b] px-7 py-4 font-bold text-white"
              >
                Email app support
              </Link>
            </div>
            <div className="doodle-card bg-[#e9c96c] p-7 sm:p-9">
              <h3 className="font-display text-3xl">Before writing</h3>
              <p className="mt-6 text-xl leading-8">
                Confirm that the device is online, close the app, and open it
                once more. If the camera or microphone is blocked, open the
                device settings and review the permissions for Shield Our
                Elders.
              </p>
              <p className="mt-5 text-xl leading-8">
                If a result seems wrong, do not act on the result alone. Verify
                the situation through an official source or a trusted person,
                then tell us what the app missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#de8877] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <div>
            <h2 className="font-display text-5xl leading-tight">
              Something already happened?
            </h2>
            <p className="mt-6 text-xl leading-8">
              If money was sent or account details were shared, call the bank or
              card issuer now using the number on the card or statement. Ask
              whether the payment can be stopped and what needs to be secured.
              Shield Our Elders is not an emergency service and cannot recover
              funds.
            </p>
            <Link
              href="/resources#recovery"
              className="doodle-button mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#183b36]"
            >
              Open the recovery guide
            </Link>
          </div>
          <div>
            <h2 className="font-display text-5xl leading-tight">
              Privacy requests
            </h2>
            <p className="mt-6 text-xl leading-8">
              Email us with a privacy question, correction, or deletion request
              and include the email address used when you contacted us. Do not
              send passwords, full account numbers, Social Security numbers, or
              complete card numbers.
            </p>
            <Link
              href="mailto:projectshieldourelders@gmail.com?subject=Privacy%20request"
              className="doodle-button mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#183b36]"
            >
              Email a privacy request
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#183b36] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Understand the app’s limits
          </h2>
          <div>
            <div className="space-y-6 text-xl leading-8 text-[#e3efec]">
              <p>
                The app can help someone slow down, identify warning signs, and
                find a safer next step. It cannot guarantee that a message is
                safe or fraudulent, and a result may be incomplete or wrong.
              </p>
              <p>
                Important decisions still need independent verification through
                an official source or a trusted person. The privacy policy
                explains how submitted content is handled, while the terms
                describe what the service provides and where its responsibility
                ends.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="doodle-button inline-flex min-h-14 items-center bg-white px-7 font-bold text-[#183b36]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="doodle-button inline-flex min-h-14 items-center bg-[#e9c96c] px-7 font-bold text-[#183b36]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
