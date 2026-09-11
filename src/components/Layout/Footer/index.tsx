import Link from "next/link";
import Logo from "../Header/Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Resources", href: "/resources" },
  { label: "Scam examples", href: "/examples" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "App support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t-[3px] border-[#17345c] bg-[#17345c] py-14 text-white">
    <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full border-[3px] border-white/30 bg-[#3977f6]" aria-hidden="true" />
    <div className="absolute right-16 top-7 hidden rotate-12 text-7xl font-black text-[#f3b83f] lg:block" aria-hidden="true">〰</div>
    <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
      <div className="grid gap-12 border-b-2 border-white/30 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Logo inverted />
          <p className="mt-10 max-w-2xl text-2xl leading-9 text-white/85 sm:text-3xl sm:leading-10">In-person scam-safety workshops in Brevard County, Florida.</p>
        </div>
        <div className="lg:pl-12">
          <nav className="grid grid-cols-2" aria-label="Footer navigation">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-white/25 py-4 text-base font-extrabold hover:text-[#f3b83f]">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 font-black uppercase text-white/60">Email</p>
          <Link href="mailto:projectshieldourelders@gmail.com" className="mt-2 block break-all text-lg font-black text-[#f3b83f] underline underline-offset-4">
            projectshieldourelders@gmail.com
          </Link>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-3 text-sm font-bold text-white/60 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Shield Our Elders</p>
        <p>Brevard County, Florida</p>
      </div>
    </div>
  </footer>
);

export default Footer;
