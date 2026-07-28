"use client";

import DonationFormContext from "@/app/context/donationContext";
import { assetPath } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const steps = [
  {
    number: "01",
    title: "Start with real examples",
    text: "Calls, texts, links, QR codes, payment requests, and family emergency scams.",
  },
  {
    number: "02",
    title: "Practice the pause",
    text: "Older adults learn what to do before clicking, paying, or sharing a code.",
  },
  {
    number: "03",
    title: "Set a trusted person",
    text: "Everyone leaves with a simple contact plan and a family verification phrase.",
  },
  {
    number: "04",
    title: "Come back and check",
    text: "Follow-up visits show what people remembered and where support is still needed.",
  },
];

const signals = [
  "Someone asks for gift cards, crypto, wire transfer, Zelle, Cash App, or Venmo.",
  "A caller says not to tell anyone.",
  "A message asks for a verification code or remote access.",
  "A family emergency feels urgent but cannot be verified.",
];

const MinimalHome = () => {
  const donationInfo = useContext(DonationFormContext);

  return (
    <main className="bg-[#f4f7f2] text-midnight_text dark:bg-dark dark:text-white">
      <section className="bg-[#f4f7f2] pt-32 pb-16 dark:bg-dark md:pt-40 md:pb-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:max-w-(--breakpoint-xl) lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 w-fit rounded-full border border-[#d5dfd8] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-primary shadow-sm dark:border-dark_border dark:bg-darkmode dark:text-white">
              Brevard County elder scam defense
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-normal text-midnight_text dark:text-white md:text-7xl">
              Scam safety, taught slowly and clearly.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-dustGray dark:text-white/85">
              Shield Our Elders helps older adults spot pressure before they click, pay, or share private information.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => donationInfo?.setIsDonationOpen(true)}
                className="rounded-md bg-primary px-7 py-4 text-base font-semibold text-white transition hover:bg-darkprimary"
              >
                Request a visit
              </button>
              <Link
                href="/cause"
                className="rounded-md border border-[#d5dfd8] bg-[#fffdf8] px-7 py-4 text-center text-base font-semibold text-midnight_text transition hover:border-primary hover:text-primary dark:border-dark_border dark:bg-darkmode dark:text-white"
              >
                See the system
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-[#fffdf8] shadow-2xl ring-1 ring-black/10 dark:bg-darkmode dark:ring-white/10">
              <Image
                src={assetPath("/images/hero/banner-bg-1.jpg")}
                alt="Older adults learning together around a laptop"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d5dfd8] bg-[#fffdf8] p-4 dark:border-dark_border dark:bg-darkmode">
                <p className="text-3xl font-semibold text-primary">4</p>
                <p className="mt-1 text-sm text-dustGray dark:text-white/85">visit sequence</p>
              </div>
              <div className="rounded-2xl border border-[#d5dfd8] bg-[#fffdf8] p-4 dark:border-dark_border dark:bg-darkmode">
                <p className="text-3xl font-semibold text-primary">1</p>
                <p className="mt-1 text-sm text-dustGray dark:text-white/85">trusted contact plan</p>
              </div>
              <div className="rounded-2xl border border-[#d5dfd8] bg-[#fffdf8] p-4 dark:border-dark_border dark:bg-darkmode">
                <p className="text-3xl font-semibold text-primary">0</p>
                <p className="mt-1 text-sm text-dustGray dark:text-white/85">rushed payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] py-16 dark:bg-[#081d16]">
        <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl)">
          <div className="grid gap-10 border-y border-[#d8e0dc] py-12 dark:border-dark_border lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                The main rule
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                Stop. Check. Ask.
              </h2>
            </div>
            <p className="max-w-4xl text-2xl leading-10 text-dustGray dark:text-white/85">
              Most scams work by rushing someone. The program gives seniors a short routine they can remember under stress: stop the conversation, check the claim, and ask a trusted person before doing anything.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf6f4] py-16 dark:bg-[#09251f]">
        <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A simple program sites can actually repeat.
            </h2>
          </div>

          <div className="divide-y divide-[#cadbd6] border-y border-[#cadbd6] dark:divide-dark_border dark:border-dark_border">
            {steps.map((step) => (
              <div key={step.number} className="grid gap-5 py-8 md:grid-cols-[120px_0.8fr_1.2fr] md:items-start">
                <p className="text-2xl font-semibold text-primary">{step.number}</p>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-lg leading-8 text-dustGray dark:text-white/85">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ee] py-16 dark:bg-[#071a14]">
        <div className="container mx-auto grid gap-12 px-4 lg:max-w-(--breakpoint-xl) lg:grid-cols-[1fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={assetPath("/images/event/event-img-2.jpg")}
              alt="Seniors in a workshop learning digital safety"
              width={1200}
              height={900}
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </div>
          <div className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What gets covered
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              The warning signs are taught in plain language.
            </h2>
            <div className="mt-8 space-y-5">
              {signals.map((signal) => (
                <div key={signal} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-error" />
                  <p className="text-lg leading-8 text-dustGray dark:text-white/85">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f2] py-16 pb-24 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl)">
          <div className="overflow-hidden rounded-[28px] bg-[#103532] text-white shadow-2xl dark:bg-darkmode">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <Image
                src={assetPath("/images/contact-page/contact.jpg")}
                alt="Caregiver helping an older adult use a phone"
                width={1000}
                height={760}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="p-8 md:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                  Bring it to your site
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                  One visit should not be the whole plan.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                  The program is built for senior centers, libraries, retirement communities, assisted-living homes, caregivers, and family groups.
                </p>
                <button
                  onClick={() => donationInfo?.setIsDonationOpen(true)}
                  className="mt-8 rounded-md bg-white px-7 py-4 text-base font-semibold text-midnight_text transition hover:bg-white/90"
                >
                  Request a visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MinimalHome;
