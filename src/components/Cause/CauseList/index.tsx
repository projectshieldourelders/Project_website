import Image from "next/image";
import Link from "next/link";
import { CauseData } from "@/app/api/data";

const CauseList = () => (
  <section id="work" className="site-paper scroll-mt-20 py-20 sm:py-28">
    <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl border-b border-[#c6d3cb] pb-10">
        <h2 className="font-display text-5xl leading-none text-[#193832] sm:text-6xl">
          The work behind the workshop
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#52645d] sm:text-xl">
          Each part of the program answers a practical question: what is happening locally, what can people rehearse, and what remains after the session ends?
        </p>
      </div>
      <div className="mt-4 divide-y divide-[#c6d3cb]">
        {CauseData.map((item, index) => (
          <Link
            href={`/cause/${item.slug}`}
            key={item.slug}
            className="group grid gap-6 py-8 transition-colors duration-200 hover:bg-[#e8eee9] sm:grid-cols-[5rem_minmax(0,1fr)_13rem] sm:items-center sm:px-4"
            data-aos="fade-up"
            data-aos-delay={`${Math.min(index * 55, 280)}`}
          >
            <span className="font-display text-3xl text-[#bb715a] sm:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-bold text-[#3f6d60]">{item.tag}</p>
              <h3 className="mt-2 font-display text-3xl leading-tight text-[#193832] sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#52645d]">{item.text}</p>
              <p className="mt-4 text-sm font-bold text-[#193832]">
                {item.raised} <span className="mx-2 text-[#bb715a]">/</span> {item.goal}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#c6d3cb] bg-[#e8eee9]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 13rem"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CauseList;
