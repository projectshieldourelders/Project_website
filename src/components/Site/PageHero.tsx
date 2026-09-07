import { assetPath } from "@/utils/assets";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  tone?: "paper" | "mist" | "ink";
  layout?: "split" | "reverse" | "centered" | "compact";
};

const tones = {
  paper: "site-paper",
  mist: "site-mist",
  ink: "site-ink",
};

const layouts = {
  split: {
    section: "min-h-[68svh]",
    inner: "min-h-[calc(68svh-82px)] flex-col items-center gap-8 lg:flex-row",
    copy: "max-w-3xl lg:min-w-0 lg:flex-1",
    image:
      "min-h-[300px] w-full sm:min-h-[410px] lg:min-h-[520px] lg:w-1/2 lg:min-w-0",
    intro: "max-w-xl",
  },
  reverse: {
    section: "min-h-[70svh]",
    inner:
      "min-h-[calc(70svh-82px)] flex-col gap-10 lg:flex-row-reverse lg:items-center lg:justify-between",
    copy: "max-w-2xl lg:min-w-0 lg:flex-1",
    image:
      "min-h-[320px] w-full sm:min-h-[430px] lg:min-h-[540px] lg:w-[52%] lg:min-w-0",
    intro: "max-w-xl",
  },
  centered: {
    section: "min-h-[78svh]",
    inner:
      "min-h-[calc(78svh-82px)] flex-col items-center justify-center gap-4 text-center",
    copy: "max-w-5xl",
    image: "min-h-[280px] w-full max-w-3xl sm:min-h-[360px] lg:min-h-[390px]",
    intro: "mx-auto max-w-2xl",
  },
  compact: {
    section: "min-h-[56svh]",
    inner:
      "min-h-[calc(56svh-82px)] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
    copy: "max-w-3xl lg:min-w-0 lg:flex-1",
    image:
      "min-h-[250px] w-full sm:min-h-[320px] lg:min-h-[390px] lg:w-[32%] lg:min-w-0",
    intro: "max-w-2xl",
  },
};

const PageHero = ({
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
  tone = "mist",
  layout = "split",
}: PageHeroProps) => (
  <section
    className={`page-hero relative overflow-hidden pt-[82px] ${layouts[layout].section} ${tone === "ink" ? "text-white" : "text-[#183b36]"} ${tones[tone]}`}
  >
    <div
      className={`mx-auto flex max-w-[94rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-10 ${layouts[layout].inner}`}
    >
      <div className={`relative z-10 ${layouts[layout].copy}`}>
        <h1 className="font-display text-[clamp(3.4rem,5vw,5.6rem)] leading-[0.97] [text-wrap:balance]">
          {title}
        </h1>
        <p
          className={`mt-7 text-xl leading-8 sm:text-2xl sm:leading-9 ${layouts[layout].intro} ${tone === "ink" ? "text-white/80" : "text-[#53645e]"}`}
        >
          {intro}
        </p>
      </div>
      {image && imageAlt ? (
        <figure
          className={`page-hero__photo relative overflow-hidden ${layouts[layout].image}`}
        >
          <Image
            src={assetPath(image)}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </figure>
      ) : null}
    </div>
  </section>
);

export default PageHero;
