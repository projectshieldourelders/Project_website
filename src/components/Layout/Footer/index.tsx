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
  <footer className="site-footer relative overflow-hidden py-14 text-white">
    <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-12 pb-12 lg:flex-row lg:[&>*]:flex-1">
        <div>
          <Logo inverted />
          <p className="mt-10 max-w-2xl text-2xl leading-9 text-white/85 sm:text-3xl sm:leading-10">
            Scam-safety workshops for older adults, families, and the people who support them.
          </p>
        </div>
        <div className="lg:pl-12">
          <nav
            className="flex flex-wrap gap-x-7 gap-y-4"
            aria-label="Footer navigation"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-extrabold hover:text-[#e9c96c]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 font-bold text-white/60">Email</p>
          <Link
            href="mailto:projectshieldourelders@gmail.com"
            className="mt-2 block break-all text-lg font-bold text-[#dc9a65] underline underline-offset-4"
          >
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
