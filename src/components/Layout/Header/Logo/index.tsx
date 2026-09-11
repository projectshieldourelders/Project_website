import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

const Logo = ({ inverted = false }: LogoProps) => (
  <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Shield Our Elders home">
    <span className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] text-xl font-black ${inverted ? "border-white bg-[#f3b83f] text-[#17345c]" : "border-[#17345c] bg-[#3977f6] text-white"}`} aria-hidden="true">✓</span>
    <span className={`font-display block min-w-0 truncate text-[1.35rem] leading-none sm:text-[1.55rem] ${inverted ? "text-white" : "text-[#17345c]"}`}>
      Shield Our Elders
    </span>
  </Link>
);

export default Logo;
