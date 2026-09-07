import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Eventdata } from "@/app/api/data";

const EventList = () => (
  <section id="sessions" className="site-paper scroll-mt-20 py-20 sm:py-28">
    <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
      <div className="grid gap-8 border-b border-[#c6d3cb] pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] lg:items-end">
        <h2 className="font-display text-5xl leading-none text-[#193832] sm:text-6xl">
          A workshop, from first visit to follow-up
        </h2>
        <p className="text-lg leading-8 text-[#52645d] sm:text-xl">
          These sessions can be hosted as a complete series or adapted for a library, senior living community, family group, or community event.
        </p>
      </div>
      <div className="mt-5 divide-y divide-[#c6d3cb]">
        {Eventdata.map((item, index) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className="group grid gap-6 py-8 transition-colors duration-200 hover:bg-[#e8eee9] sm:grid-cols-[10rem_minmax(0,1fr)] sm:px-4 lg:grid-cols-[12rem_minmax(0,1fr)_14rem] lg:items-center"
            data-aos="fade-up"
            data-aos-delay={`${Math.min(index * 65, 300)}`}
          >
            <div>
              <p className="font-display text-3xl text-[#bb715a]">{format(new Date(item.date), "MMM d")}</p>
              <p className="mt-1 text-sm font-bold text-[#52645d]">{format(new Date(item.date), "yyyy")}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#3f6d60]">{item.type}</p>
              <h3 className="mt-2 font-display text-3xl leading-tight text-[#193832] sm:text-4xl">{item.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#52645d]">{item.text}</p>
              <p className="mt-4 text-sm font-bold text-[#193832]">
                {item.location} <span className="mx-2 text-[#bb715a]">/</span> {item.duration}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#c6d3cb] bg-[#e8eee9] sm:col-start-2 lg:col-start-auto">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 14rem"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default EventList;
