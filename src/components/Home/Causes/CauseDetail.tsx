"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CauseData } from "@/app/api/data";
import Volunteer from "@/components/SharedComponent/Volunteer";

const CauseDetail = () => {
  const { slug } = useParams();
  const item = CauseData.find((entry) => entry.slug === slug);

  if (!item) return null;

  return (
    <>
      <main className="site-paper pt-[82px] text-[#193832]">
        <section className="mx-auto max-w-[92rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <Link href="/cause" className="text-base font-bold text-[#3f6d60] underline underline-offset-4">Back to the program</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,.88fr)] lg:items-end">
            <div>
              <p className="text-sm font-bold text-[#bb715a]">{item.tag}</p>
              <h1 className="mt-3 font-display text-[clamp(3.2rem,5vw,5.6rem)] leading-[.98]">{item.title}</h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-[#52645d]">{item.text}</p>
            </div>
            <dl className="border-y border-[#c6d3cb] py-5 text-base">
              <div className="flex justify-between gap-6 py-3"><dt className="text-[#52645d]">Focus</dt><dd className="font-bold">{item.raised}</dd></div>
              <div className="flex justify-between gap-6 border-t border-[#c6d3cb] py-3"><dt className="text-[#52645d]">Intended outcome</dt><dd className="font-bold text-right">{item.goal}</dd></div>
              <div className="flex justify-between gap-6 border-t border-[#c6d3cb] py-3"><dt className="text-[#52645d]">Updated</dt><dd className="font-bold">{item.date}</dd></div>
            </dl>
          </div>
        </section>
        <figure className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
          <div className="relative aspect-[16/8] overflow-hidden border border-[#c6d3cb] bg-[#e8eee9]"><Image src={item.image} alt={item.title} fill priority sizes="(max-width: 1536px) 100vw, 92rem" className="object-cover" /></div>
        </figure>
        <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:px-10">
          <h2 className="font-display text-5xl leading-none sm:text-6xl">Why it belongs in the program</h2>
          <div className="space-y-6 text-lg leading-8 text-[#52645d] sm:text-xl">
            <p>This part of the work gives a workshop host and its participants something concrete to return to. It makes the safety routine easier to use when an unexpected caller, text, or payment request creates pressure.</p>
            <p>The goal is not to make people suspicious of every message. It is to make room for a pause, an independent check, and a conversation with someone they trust before a decision becomes difficult to reverse.</p>
          </div>
        </section>
      </main>
      <Volunteer />
    </>
  );
};

export default CauseDetail;
