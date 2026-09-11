import { assetPath } from "@/utils/assets";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const PageHero = ({ title, intro, image, imageAlt, imagePosition = "center" }: PageHeroProps) => (
  <section className="relative min-h-[68svh] overflow-hidden border-b-[3px] border-[#17345c] bg-[#f4f7fb] pt-[82px] text-[#17345c]">
    <div className="mx-auto grid min-h-[calc(68svh-82px)] max-w-[94rem] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
      <div className="relative z-10 max-w-3xl">
        <h1 className="font-display text-[clamp(3.4rem,5vw,5.6rem)] leading-[0.97] [text-wrap:balance]">{title}</h1>
        <p className="mt-7 max-w-xl text-xl leading-8 text-[#51657f] sm:text-2xl sm:leading-9">{intro}</p>
      </div>
      <div className="relative min-h-[300px] sm:min-h-[410px] lg:min-h-[520px]">
        <Image
          src={assetPath(image)}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-contain"
          style={{ objectPosition: imagePosition }}
        />
      </div>
    </div>
  </section>
);

export default PageHero;
