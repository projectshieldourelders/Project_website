import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface EventProps {
  title?: string;
  detail?: string;
  category?: string;
  location?: string;
  eventdate?: string;
  duration?: string;
  type?: string;
  entrants?: string;
  image?: string;
}

const EventDetails = ({ title, detail, category, location, eventdate, duration, type, entrants, image }: EventProps) => {
  const formattedDate = eventdate ? format(new Date(eventdate), "MMMM d, yyyy") : "Date to be confirmed";

  return (
    <main className="site-paper pt-[82px] text-[#193832]">
      <section className="mx-auto max-w-[92rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <Link href="/events" className="text-base font-bold text-[#3f6d60] underline underline-offset-4">Back to workshops</Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] lg:items-end">
          <div>
            <p className="text-sm font-bold text-[#bb715a]">{type}</p>
            <h1 className="mt-3 font-display text-[clamp(3.2rem,5vw,5.6rem)] leading-[.98]">{title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-[#52645d]">{detail}</p>
          </div>
          <dl className="border-y border-[#c6d3cb] py-5 text-base">
            <div className="flex justify-between gap-6 py-3"><dt className="text-[#52645d]">Date</dt><dd className="font-bold text-right">{formattedDate}</dd></div>
            <div className="flex justify-between gap-6 border-t border-[#c6d3cb] py-3"><dt className="text-[#52645d]">Location</dt><dd className="font-bold text-right">{location}</dd></div>
            <div className="flex justify-between gap-6 border-t border-[#c6d3cb] py-3"><dt className="text-[#52645d]">Length</dt><dd className="font-bold text-right">{duration}</dd></div>
            <div className="flex justify-between gap-6 border-t border-[#c6d3cb] py-3"><dt className="text-[#52645d]">Format</dt><dd className="font-bold text-right">{category}</dd></div>
          </dl>
        </div>
      </section>
      {image ? <figure className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10"><div className="relative aspect-[16/8] overflow-hidden border border-[#c6d3cb] bg-[#e8eee9]"><Image src={image} alt="" fill priority sizes="(max-width: 1536px) 100vw, 92rem" className="object-cover" /></div></figure> : null}
      <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:px-10">
        <h2 className="font-display text-5xl leading-none sm:text-6xl">What the group can expect</h2>
        <div className="space-y-6 text-lg leading-8 text-[#52645d] sm:text-xl">
          <p>The session is conversation-led and paced for questions. Participants are never asked to share private financial details or tell a personal story in front of the group.</p>
          <p>We focus on practical choices people can use later: ending an unexpected contact, checking the story through an official source, and bringing in a trusted person before money or account information is involved.</p>
        </div>
      </section>
    </main>
  );
};

export default EventDetails;
