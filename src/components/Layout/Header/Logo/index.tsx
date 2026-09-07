import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

const Logo = ({ inverted = false }: LogoProps) => (
  <Link
    href="/"
    className="group flex min-w-0 items-center gap-3"
    aria-label="Shield Our Elders home"
  >
    <span
      className={`brand-mark relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl font-bold ${inverted ? "brand-mark--inverted" : ""}`}
      aria-hidden="true"
    >
      ✓
    </span>
    <span
      className={`font-display block min-w-0 truncate text-[1.35rem] leading-none sm:text-[1.55rem] ${inverted ? "text-white" : "text-[#183b36]"}`}
    >
      Shield Our Elders
    </span>
  </Link>
);

export default Logo;
